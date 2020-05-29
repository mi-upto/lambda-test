export type When = "now" | "next";
export type Type = "g" | "gachi" | "l" | "league";

interface RequestParameter {
  text: When;
}

export const isRequestParameter = (value: unknown): value is RequestParameter => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  return 'text' in value;
}

export const isWhenText = (value:string): value is When => {
  if (value === "now" ||  value === "next") {
    return true;
  }
  return false;
}