import { API, getAllJson } from "./http";

class DataTableLogService {
  getLogFrom(dataTable) {
    getAllJson(API.table[dataTable]).then((log) => console.log(log));
    return getAllJson(API.table[dataTable]).then((log) => log);
  }
  async getTableFields(table) {
    let tableRecords = await table.then((res) => res);
    //think over a case when there is no data in the table
    //and also how to get the fields differently
    let fields = tableRecords.records.map((record) => {
      return Object.keys(record.fields);
    });
    let numberOfFields = fields.map((field) => field.length);
    let sortedFields = this.implementSorting(numberOfFields);
    let filteredFields = fields.filter(
      (item) => item.length === sortedFields[[sortedFields.length - 1]]
    )[0];
    return this.convertToObject(filteredFields);
  }
  implementSorting(sortable) {
    return sortable.sort(function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  convertToObject(arr) {
    return arr.reduce((newObj, item) => {
      newObj[item] = item;
      return newObj;
    }, {});
  }
  async getOptions(log) {
    let tableRecords = await log.then((res) => res);
    let options = [];
    for (let item of tableRecords.records) {
      options.push(item.fields["Request Type"]);
    }
    return options.filter(function (item, pos) {
      return options.indexOf(item) == pos;
    });
  }
  //.map((item) => `${$t(item)}`);
}
export default new DataTableLogService();
