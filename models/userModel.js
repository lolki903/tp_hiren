let my = require("../config/database");
let moment = require("moment");
moment.locale("fr");
class User {
  constructor(row) {
    this.row = row;
  }
  get id() {
    return this.row.id;
  }
  get name() {
    return this.row.name;
  }
  get description() {
    return this.row.description;
  }
  get date() {
    return moment(this.row.date).format("LL");
  }
  get image() {
    return this.row.image;
  }
  get created_at() {
    return moment(this.row.created_at).format("LL");
  }
  get updated_at() {
    return moment(this.row.updated_at).format("LL");
  }
  set id(id) {
    this.row.id = id;
  }
  set name(name) {
    this.row.name = name;
  }
  set description(description) {
    this.row.description = description;
  }
  set date(date) {
    this.row.date = date;
  }
  set image(image) {
    this.row.image = image;
  }
  set created_at(created_at) {
    this.row.created_at = created_at;
  }
  set updated_at(updated_at) {
    this.row.updated_at = updated_at;
  }
}
module.exports = User;
