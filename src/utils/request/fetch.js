import { HOSTURL } from "../constant";

export const get = async (url) => {
  let response = await fetch(HOSTURL + url);
  let result = await response.json();
  return result;
};
