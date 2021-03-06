import API_TOKEN from "../config/api-token";

const baseUrl = "https://api.airtable.com/v0/";
const airTableBase = "appJzrXahAuT6QocL";

const setFetchOptionHeader = () => ({
  "Content-Type": "application/json;charset=UTF-8",
  Authorization: "Bearer " + API_TOKEN,
});

const getUrl = (currentTable) => `${baseUrl}${airTableBase}/${currentTable}`;

const api = {
  sign: {
    volunteers: getUrl("Volunteers"),
    neighbors: getUrl("Neighbors"),
  },
  table: {
    volunteers: getUrl("Volunteers"),
    neighbors: getUrl("Neighbors"),
    skills: getUrl("Skills"),
    equipment: getUrl("Equipment"),
    contacts: getUrl("Contacts"),
    "event logging": getUrl("Event Logging"),
  },
};

export { api as API };

// Get all records from request
export const getAllJson = async (url) => {
  return await fetch(url, {
    headers: setFetchOptionHeader(),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));
};
export const getJsonById = async (url) => {
  return await fetch(url, {
    headers: setFetchOptionHeader(),
  });
};
export const postJson = async (url, data) => {
  return await fetch(url, {
    method: "POST",
    headers: setFetchOptionHeader(),
    body: JSON.stringify(data),
  });
};
