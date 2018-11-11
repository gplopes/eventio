import { eventUrl, api } from "./apiConfig";

const allEvents = () => api.get(eventUrl).then(({ data }) => data);

const joinEvent = (eventId, userToken) => {
  const url = `${eventUrl}/${eventId}/attendees/me`;
  api.defaults.headers.common["Authorization"] = userToken;
  return api.post(url);
};

const leaveEvent = (eventId, userToken) => {
  const url = `${eventUrl}/${eventId}/attendees/me`;
  api.defaults.headers.common["Authorization"] = userToken;
  return api.delete(url);
};

const createEvent = (eventInfo, userToken) => {
  api.defaults.headers.common["Authorization"] = userToken;
  return api.post(eventUrl, eventInfo).then(res => {
    const event = res.data;
    return { event };
  });
};

const getEvent = (eventId) => {
  const url = `${eventUrl}/${eventId}`;
  return api.get(url).then(res => {
    const event = res.data;
    return { event };
  });
};

export default { allEvents, joinEvent, leaveEvent, createEvent, getEvent };
