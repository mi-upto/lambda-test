
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      test: "michon",
    }),
  };
}