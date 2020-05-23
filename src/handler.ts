
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

import { LeagueResponse } from './types'

// @see https://spla2.yuu26.com/
//spla2.yuu26.com/league/now
//spla2.yuu26.com/league/next



export async function getSPLATOON_STAGE(type: String, When: String): LeagueResponse {

}


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