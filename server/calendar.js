const { google } = require("googleapis");

export const getEvents = () => {

  const calendar = google.calendar({
    version: "v3",
    auth: process.env.GOOGLE_API_KEY
  });

  const res = calendar.events.list({
    calendarId: "primary",
    maxResults: 10,
    singleEvents: true
  });

  return res.data.items || [];
}
