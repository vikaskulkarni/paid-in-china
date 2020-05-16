import * as uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import * as currencyConverter from "./libs/currency-converter";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const data = JSON.parse(event.body);
  /* Input parameters while adding an expense */
  const params = {
    TableName: "chinaPay",
    Item: {
      expenseId: uuid.v1(),
      whatValue: data.whatValue,
      whenValue: data.whenValue,
      howMuch: data.howMuch,
      currency: data.currency,
      createdAt: Date.now(),
    },
  };

  try {
    // Insert into chinaPay table
    await dynamoDbLib.call("put", params);

    const howMuch = await currencyConverter.convert(
      params.Item.howMuch,
      params.Item.currency
    );

    // Get the aggregated results from the second table
    const getAggregatedResult = await dynamoDbLib.call("get", {
      TableName: "aggregatedChinaPay",
      Key: { aggregateId: "12345" },
    });

    const aggregatedValues = getAggregatedResult.Item;
    // Store the aggregated table values into another variable to hold calculated values
    let calculatedValues = JSON.parse(JSON.stringify(aggregatedValues));

    const calculateValue = (whenValue, whatValueChar, howMuch) => {
      switch (whenValue) {
        case "weekly":
          calculatedValues[`${whatValueChar}wk`] =
            howMuch + aggregatedValues[`${whatValueChar}wk`];
          break;
        case "monthly":
          calculatedValues[`${whatValueChar}mt`] =
            howMuch + aggregatedValues[`${whatValueChar}mt`];
          break;
        case "yearly":
          calculatedValues[`${whatValueChar}yr`] =
            howMuch + aggregatedValues[`${whatValueChar}yr`];
          break;
      }
    };

    /* Determine what type of input entry, if personal, bussiness or country */
    switch (params.Item.whatValue) {
      case "personal":
        // Store this as calculateValue.pwk or calculateValue.pmt or calculateValue.pyr
        // based on the whenValue if it is week, month or year
        calculateValue(params.Item.whenValue, "p", howMuch);
        // Calculate personal total with current and previous values
        calculatedValues["personalTotal"] =
          howMuch + aggregatedValues["personalTotal"];
        break;
      case "bussiness":
        // Store this as calculateValue.bwk or calculateValue.bmt or calculateValue.byr
        // based on the whenValue if it is week, month or year
        calculateValue(params.Item.whenValue, "b", howMuch);
        // Calculate bussiness total with current and previous values
        calculatedValues["bussinessTotal"] =
          howMuch + aggregatedValues["bussinessTotal"];
        break;
      case "country":
        // Store this as calculateValue.cwk or calculateValue.cmt or calculateValue.cyr
        // based on the whenValue if it is week, month or year
        calculateValue(params.Item.whenValue, "c", howMuch);
        // Calculate country total with current and previous values
        calculatedValues["countryTotal"] =
          howMuch + aggregatedValues["countryTotal"];
        break;
    }
    // Calculate the TOTAL
    calculatedValues["allTotal"] = howMuch + aggregatedValues["allTotal"];

    const paramsAggregated = {
      TableName: "aggregatedChinaPay",
      Key: {
        aggregateId: "12345",
      },
      UpdateExpression:
        "SET pwk = :pwk, pmt = :pmt,  pyr = :pyr, \
        bwk = :bwk, bmt = :bmt,  byr = :byr, \
        cwk = :cwk, cmt = :cmt,  cyr = :cyr, \
        countryTotal = :countryTotal, bussinessTotal = :bussinessTotal, personalTotal = :personalTotal, allTotal = :allTotal",
      ExpressionAttributeValues: {
        ":pwk": calculatedValues.pwk,
        ":pmt": calculatedValues.pmt,
        ":pyr": calculatedValues.pyr,
        ":bwk": calculatedValues.bwk,
        ":bmt": calculatedValues.bmt,
        ":byr": calculatedValues.byr,
        ":cwk": calculatedValues.cwk,
        ":cmt": calculatedValues.cmt,
        ":cyr": calculatedValues.cyr,
        ":countryTotal": calculatedValues.countryTotal,
        ":bussinessTotal": calculatedValues.bussinessTotal,
        ":personalTotal": calculatedValues.personalTotal,
        ":allTotal": calculatedValues.allTotal,
      },
      ReturnValues: "ALL_NEW",
    };
    /*
        This is how the input parameter values, paramsAggregated to be updated looks like;

        :allTotal:240
        :bmt:40
        :bussinessTotal:40
        :bwk:0
        :byr:0
        :cmt:0
        :countryTotal:0
        :cwk:0
        :cyr:0
        :personalTotal:200
        :pmt:0
        :pwk:200
        :pyr:0

    */
    const updateResult = await dynamoDbLib.call("update", paramsAggregated);

    return success({
      item: params.Item,
      ipHowMuch: data.howMuch,
      opHowMuch: howMuch,
    });
  } catch (e) {
    return failure({ status: false, error: e });
  }
}
