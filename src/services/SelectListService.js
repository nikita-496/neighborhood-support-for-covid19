import {API, getAllJson} from "./http"

class SelectListService {

 async getOptions(table) {
    return getAllJson(API[table])
    .then(res => res.json())
    .then(result => this.asignOptions(result, table))
 };

 asignOptions(options, table) {
  let field = table === "skills" ? ["Profession"] 
  : table === "equipment" ? ["Name"]
  : table === "contacts" ? ["Contact form"]
  : ["Request Type"];
  return options.records.map(record => record.fields[field]);
 };
 
}

export default new SelectListService()