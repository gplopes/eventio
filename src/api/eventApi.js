import { eventUrl, api } from "./apiConfig";

const allEvents = () => api.get(eventUrl).then(({ data }) => data);

const joinEvent = (eventId, userToken) => {
  const url = `${eventUrl}/${eventId}/attendees/me`;
  api.defaults.headers.common['Authorization'] = userToken;
  return api.post(url);
};

const leaveEvent = (eventId, userToken) => {
  const url = `${eventUrl}/${eventId}/attendees/me`;
  api.defaults.headers.common['Authorization'] = userToken;
  return api.delete(url);
};

export default { allEvents, joinEvent, leaveEvent };
