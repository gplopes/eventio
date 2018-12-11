import path from "path";
import fetch from "isomorphic-unfetch";
import getConfig from "next/config";

const { APIKey, API } = getConfig().publicRuntimeConfig;

////////////////////////////////////////////////// ALL EVENTS

const allEvents = () =>
  fetch(path.join(API, "events"), { headers: { APIKey } }).then((r: any) =>
    r.json()
  );

////////////////////////////////////////////////////// JOIN

const joinEvent = (eventId: string, userToken: string) => {
  const url = path.join(API, "events", eventId, "attendees/me");

  const options = {
    method: "POST",
    headers: { APIKey, Authorization: userToken }
  };
  return fetch(url, options).then((r: any) => r.json());
};

////////////////////////////////////////////////////////// LEAVE

const leaveEvent = (eventId: string, userToken: string) => {
  const url = path.join(API, "events", eventId, "attendees/me");
  const options = {
    method: "DELETE",
    headers: { APIKey, Authorization: userToken }
  };
  return fetch(url, options).then((r: any) => r.json());
};

////////////////////////////////////////////////////////  CREATE

const createEvent = (eventInfo: object, userToken: string) => {
  const url = path.join(API, "events");
  const options = {
    headers: { APIKey, Authorization: userToken },
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
