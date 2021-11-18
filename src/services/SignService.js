import { API, postJson, getAllJson } from "./http";

class SignService {

 async signUp(table, data) {
  if (table === "Volunteers") {
   data.fields["Primary Skill"] = await this.handlingData("Skills", data, "Primary Skill");
   data.fields["Secondary Skills"] = await this.handlingData("Skills", data, "Secondary Skills");
   data.fields.Equipment = await this.handlingData("Equipment", data, "Equipment");
   return postJson(API.sign.upVolunteers, data);
  };
  return postJson(API.sign.upNeighbors, data);
 };

 // Setting data for table "Volunteers" in terms of related table fields in base
 async handlingData(table, data, type) {
  let id = "";
    if (table === "Skills") {
      await getAllJson(API.skills) 
       .then(res => res.json())
       .then( async result => {
        return table === "Skills" && type === "Primary Skill" ? id = await this.searchId(result.records, data, type) 
        : id = await this.searchId(result.records, data, type) 
      }
    )}else {
      await getAllJson(API.equipment)
       .then(res => res.json())
       .then( async result => {
        return id = await this.searchId(result.records, data, type)
       })
    }
  return id; 
 }; 

 searchId(options, data, type) {
  let selectedOptions = options.filter(option => {
    return type === "Equipment" ?  option.fields.Name === data.fields[type]
    : option.fields.Profession === data.fields[type]
  });
  return selectedOptions.map(option => option.id);
 };

}

export default new SignService()