import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: "aggregatedChinaPay",
    Key: {
      aggregateId: "12345",
    },
  };

  try {
    const result = await dynamoDbLib.call("get", params);
    if (result.Item) {
      return success(result.Item);
    } else {
      return failure({ status: false, error: "Item not found." });
    }
  } catch (e) {
    return failure({ status: false, error: e });
  }
}