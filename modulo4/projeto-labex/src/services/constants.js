import { getLoggedUserToken } from "./login";

export const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/natasha-reis-hooks";

export const AXIOS_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    auth: getLoggedUserToken(),
  },
};
