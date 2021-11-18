import API_TOKEN from "../config/api-token";

const baseUrl = "https://api.airtable.com/v0/";
const airTableBase = "appJzrXahAuT6QocL/"

const setFetchOptionHeader = () => ({
	"Content-Type": "application/json;charset=UTF-8",
  "Authorization": "Bearer " + API_TOKEN,
 });

const getUrl = (currentTable) => `${baseUrl}${airTableBase}${currentTable}`;

const api = {
	sign: {
		upVolunteers: getUrl("Volunteers"),
		upNeighbors: getUrl("Neighbors"),
	},
	skills: getUrl("Skills"),
	equipment: getUrl("Equipment"),
};

export {api as API};

// Get all records from request
export const getAllJson =  async (url) => {
 return await fetch(url, {
		headers: setFetchOptionHeader(),
	})
}
export const postJson = async (url, data) => {
	await fetch(url, {
		method: "POST", 
		headers: setFetchOptionHeader(),
		body: JSON.stringify(data)
	})
}


