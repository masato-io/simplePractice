import JSONAPIAdapter from "@ember-data/adapter/json-api";
import ENV from "simple-practice/config/environment";

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.clientInfo.baseURL;
  namespace = "client-portal-api";
  headers = {
    Accept: "application/vnd.api+json",
    "Api-Version": "2020-01-01",
    "Application-Build-Version": "0.0.1",
    "Application-Platform": "web",
  };
}
