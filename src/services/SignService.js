import { API, postJson, getAllJson } from "./http";

class SignService {
  async signUp(table, data) {
    return postJson(API.sign[table], data);
  }

  // Setting data for table "Volunteers" in terms of related table fields in base
  async handlingData(field, data, type) {
    if (field === "Skills") {
      return getAllJson(API.skills)
        .then((res) => res.json())
        .then(async (result) => {
          return await this.searchId(result.records, data, type);
        });
    } else {
      return getAllJson(API.equipment)
        .then((res) => res.json())
        .then(async (result) => await this.searchId(result.records, data, type));
    }
  }

  searchId(options, data, type) {
    let selectedOptions = options.filter((option) => {
      return type === "Equipment"
        ? option.fields.Name === data.fields[type]
        : option.fields.Profession === data.fields[type];
    });
    return selectedOptions.map((option) => option.id);
  }
}
export default new SignService();
