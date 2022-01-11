import { API, getAllJson } from "./http";

class DataTableLogService {
  getLogFrom(name) {
    return getAllJson(API.table[name]).then((log) => log);
  }
  async getTableFields(table) {
    let tableRecords = await table.then((res) => res);
    //think over a case when there is no data in the table
    //and also how to get the fields differently
    let fields = tableRecords.records.map((record) => {
      return Object.keys(record.fields);
    });
    let numberOfFields = fields.map((field) => field.length);
    let sortedFields = DataTableLogService.implementSorting(numberOfFields);
    let filteredFields = fields.filter(
      (item) => item.length === sortedFields[[sortedFields.length - 1]]
    )[0];
    return DataTableLogService.convertToObject(filteredFields);
  }
  static implementSorting(sortable) {
    return sortable.sort(function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  static convertToObject(arr) {
    return arr.reduce((newObj, item) => {
      newObj[item] = item;
      return newObj;
    }, {});
  }
  async getOptions(field) {
    let tableRecords = await field.then((res) => res);
    let options = [];
    for (let item of tableRecords.records) {
      if (item.fields["Request Type"]) options.push(item.fields["Request Type"]);
      if (item.fields.Profession) options.push(item.fields.Profession);
      if (item.fields.Attachments) options.push(item.fields.Name);
      if (item.fields["Contact form"]) options.push(item.fields["Contact form"]);
    }
    return options.filter(function (item, pos) {
      return options.indexOf(item) == pos;
    });
  }
}
export default new DataTableLogService();
