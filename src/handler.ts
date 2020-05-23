
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

import { client } from "./api-client";
import { LeagueResponse } from './types'


export async function handlerNow(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  let responseData: LeagueResponse | null = null;
    try {
      const { data } = await client.get(`/league/now`);
      responseData = data;
    } catch (e) {
      console.log(e);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        responseData,
      }),
    };
}

export async function handlerNext(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {

  let responseData: LeagueResponse | null = null;
  try {
    const { data } = await client.get(`/league/next`);
    responseData = data;
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      responseData,
    }),
  };
}

