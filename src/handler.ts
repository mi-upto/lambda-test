
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


export async function handlerPost(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {

  console.log("starting handlerPost", event);


  return {
    statusCode: 200,
    body: JSON.stringify({
      response_type: "in_channel",
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "現在 `ガチホコバトル` 開催中！",
          },
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "*Map:* モズク農園, アンチョビットゲームズ",
            },
          ],
        },
        {
          type: "image",
          title: {
            type: "plain_text",
            text: "モズク農園",
            emoji: true,
          },
          image_url:
            "https://app.splatoon2.nintendo.net/images/stage/a12e4bf9f871677a5f3735d421317fbbf09e1a78.png",
          alt_text: "モズク農園",
        },
        {
          type: "image",
          title: {
            type: "plain_text",
            text: "アンチョビットゲームズ",
            emoji: true,
          },
          image_url:
            "https://app.splatoon2.nintendo.net/images/stage/1430e5ac7ae9396a126078eeab824a186b490b5a.png",
          alt_text: "アンチョビットゲームズ",
        },
      ],
    }),
  };
}

