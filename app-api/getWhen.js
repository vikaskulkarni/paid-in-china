import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: "chinaPay",
    ProjectionExpression: "whenValue",
  };

  try {
    const result = await dynamoDbLib.call("scan", params);

    let weeks = 0,
      months = 0,
      years = 0;
    result.Items.filter((obj) => {
      switch (obj.whenValue) {
        case "weekly":
          weeks++;
          break;
        case "monthly":
          months++;
          break;
        case "yearly":
          years++;
          break;
      }
    });
    return success({ weeks, months, years });
  } catch (e) {
    return failure({ status: false, error: e });
  }
}
