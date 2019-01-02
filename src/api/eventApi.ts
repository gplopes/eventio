import path from "path";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

import authApi from "../services/auth/authApi";

const { APIKey, API } = getConfig().publicRuntimeConfig;

////////////////////////////////////////////////// Helpers > Catch API Errors

const throwApiError = (data: any) => {
  if (data.error) throw Error(data.error);
  return data;
};

const catchApiErrors = (err: any) => {
  if (err.message === "Auth.InvalidToken") authApi.refreshToken();
  return err;
}

////////////////////////////////////////////////// ALL EVENTS

const allEvents = () =>
  fetch(path.join(API, "events"), { headers: { APIKey } }).then((r: any) =>
    r.json()
  );

////////////////////////////////////////////////////// JOIN

const joinEvent = (eventId: string, authToken: string) => {
  const url = path.join(API, "events", eventId, "attendees/me");

  const options = {
    method: "POST",
    headers: { APIKey, Authorization: authToken }
  };
  return fetch(url, options)
    .then((r: any) => r.json())
    .then(throwApiError)
    .catch(catchApiErrors);
};

////////////////////////////////////////////////////////// LEAVE

const leaveEvent = (eventId: string, authToken: string) => {
  const url = path.join(API, "events", eventId, "attendees/me");
  const options = {
    method: "DELETE",
    headers: { APIKey, Authorization: authToken }
  };
  return fetch(url, options).then((r: any) => r.json());
};

////////////////////////////////////////////////////////  CREATE

const createEvent = (eventInfo: object, authToken: string) => {
  const url = path.join(API, "events");
  const options = {
    headers: { APIKey, Authorization: authToken },
    body: JSON.stringify(eventInfo)
  };

  return fetch(url, options).then((r: any) => r.json());
};

///////////////////////////////////////////////////////// Get Evnet

const getEvent = (eventId: string) => {
  const url = path.join(API, "events", eventId);
  return fetch(url).then((r: any) => r.json());
};

export default { allEvents, joinEvent, leaveEvent, createEvent, getEvent };
