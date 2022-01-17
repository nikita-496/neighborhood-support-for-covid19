import { API, postJson, getAllJson } from "./http";
import translation from "../utils/translation";

class SignService {
  async signUp(table, data) {
    if (table === "volunteers") {
      data.fields["Primary Skill"] = await SignService.handlingData(
        "skills",
        data,
        "Primary Skill"
      );
      data.fields["Secondary Skills"] = await SignService.handlingData(
        "skills",
        data,
        "Secondary Skills"
      );
      data.fields.Equipment = await SignService.handlingData("equipment", data, "Equipment");
      return postJson(API.sign[table], data);
    }
    return postJson(API.sign[table], data);
  }

  // Setting data for table "Volunteers" in terms of related table fields in base
  static async handlingData(field, data, type) {
    //to match options and get an ID, selector values ​​must be in the same language
    const selectOption = translation.translate(data.fields[type]);
    return getAllJson(API.table[field]).then(
      async (result) => await this.searchId(result.records, selectOption, type)
    );
  }
  static searchId(options, selectOption, type) {
    let selectedOption = options.filter((option) => {
      return type === "Equipment"
        ? option.fields.Name === selectOption
        : option.fields.Profession === selectOption;
    });
    return selectedOption.map((option) => option.id);
  }
}
export default new SignService();
