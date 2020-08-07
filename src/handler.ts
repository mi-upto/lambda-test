
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

import { client } from "./api-client";
import {
  LeagueResponse,
  When,
  Type,
  isRequestParameter,
  isWhenText,
} from "./types";
import qs from 'qs';
import { convertDateTime, sendToSlackTextMsg } from "./util";


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

interface GetSplatoonStagesOption {
  when: When;
  type?: Type;
}

const getSplatoonStages = async ({ when = 'now' , type = 'league' }: GetSplatoonStagesOption) => {
  let responseData: LeagueResponse | null = null;
  try {
    const { data } = await client.get(`/${type}/${when}`);
    responseData = data;
  } catch (e) {
    console.log(e);
  }

  return responseData;
};

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

const createTitle = (whenText: When): string => {
  switch(whenText) {
    case 'next':
      return '次は \`${stages.rule}\` 開催予定！'
    case 'now':
    default:
      return '現在 \`${stages.rule}\` 開催中！'
  }
}

export async function handlerPost(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'invalid 1' })
    }
  }

  const eventBody = qs.parse(event.body);
  if (!isRequestParameter(eventBody)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "invalid 2" }),
    };
  }

  const whenText = eventBody.text;
  if (!isWhenText(whenText) ) {
    const textMsg = sendToSlackTextMsg("Sorry, I didn’t quite get that. I’m easily confused. Perhaps try the words in a different order, or use quotes around the message you'd like to send. This usually works:\n\`/schedule [now or next]\`");
    return {
      statusCode: 200,
      body: JSON.stringify({
        blocks: [textMsg],
      }),
    };
  }

  const responseData = await getSplatoonStages({ when: whenText, type: 'league' });

  if (responseData === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "invalid 3" }),
    };
  }

  const stages = responseData.result[0];
  const startAt = convertDateTime(stages.startT);
  const endAt = convertDateTime(stages.endT);
  const heading = createTitle(whenText);
  const stageText = `ステージは \`${stages.mapsEx[0].name}\`, \`${stages.mapsEx[1].name}\` 🦑`;
  const ruleAndStageText = sendToSlackTextMsg(`${heading} \n ${stageText}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      response_type: "in_channel",
      blocks: [
        ruleAndStageText,
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `*Time:* ${startAt} ~ ${endAt}`,
            },
          ],
        },
        {
          type: "image",
          title: {
            type: "plain_text",
            text: stages.mapsEx[0].name,
            emoji: true,
          },
          image_url: `${stages.mapsEx[0].image}`,
          alt_text: `${stages.mapsEx[0].name}`,
        },
        {
          type: "image",
          title: {
            type: "plain_text",
            text: `${stages.mapsEx[1].name}`,
            emoji: true,
          },
          image_url: `${stages.mapsEx[1].image}`,
          alt_text: `${stages.mapsEx[1].name}`,
        },
      ],
    }),
  };
}

