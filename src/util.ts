
import {
  UnixTime,
} from "./types";
import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
dayjs.extend(utcPlugin);

export const convertDateTime = (unixtime: UnixTime): string => {
  return dayjs(unixtime * 1000).utcOffset(9).format("YYYY/MM/DD HH:mm:ss");
};

export const sendToSlackTextMsg = (text: string) => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `${text}`,
    },
  };
};