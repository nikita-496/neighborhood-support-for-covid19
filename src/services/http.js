import API_TOKEN from "../config/api-token";

const baseUrl = "https://api.airtable.com/v0/";
const airTableBase = "appJzrXahAuT6QocL/"

const setFetchOptionHeader = () => ({
	"Content-Type": "application/json;charset=UTF-8",
  "Authorization": "Bearer " + API_TOKEN,
 });

const getUrl = (currentTable) => `${baseUrl}${airTableBase}${currentTable}`;

export const postUser = async (table, dataToFetch) => {
	if(table === "Volunteers") {
		dataToFetch.fields["Primary Skill"] = await serachSelectedOptionsId("Skills", dataToFetch, "Primary Skill")
		dataToFetch.fields["Secondary Skills"] = await serachSelectedOptionsId("Skills", dataToFetch, "Secondary Skills")
		dataToFetch.fields.Equipment = await serachSelectedOptionsId("Equipment", dataToFetch)
	};

	await fetch(getUrl(table), {
		method: "POST",
		headers: setFetchOptionHeader(),
		body: JSON.stringify(dataToFetch)
	})
		.then(res => res.json())
};

// Setting data for table "Volunteers" in terms of related table fields
const serachSelectedOptionsId = async (table, data, type) => {

	const searchId = (options, type) => {
		let selectedOptions = options.filter(option => {
			return type === "primary" ? option.fields.Profession === data.fields["Primary Skill"] 
			: type === "secondary" ? option.fields.Profession === data.fields["Secondary Skills"]
			: option.fields.Name === data.fields.Equipment
		});
		return  selectedOptions.map(option => option.id);
	};

	let id = "";
	await fetch(getUrl(table), {
		headers: setFetchOptionHeader()
	})
		.then(res => res.json())
		.then(result => {
			return table === "Skills" && type === "Primary Skill" ? id = searchId(result.records, "primary") 
			: table === "Skills" && type === "Secondary Skills" ? id = searchId(result.records, "secondary") 
			: id = searchId(result.records)
		});
		return id;
};

