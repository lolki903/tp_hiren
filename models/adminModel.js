let my = require("../config/database");
let moment = require("moment");
moment.locale("fr");
class Admin {
  constructor(row) {
    this.row = row;
  }
  get id() {
    return this.row.id;
  }
  get created_at() {
    return moment(this.row.created_at).format("LL");
  }
  get updated_at() {
    return moment(this.row.updated_at).format("LL");
  }
  get pincode() {
    return this.row.pincode;
  }
  set id(id) {
    this.row.id = id;
  }
  set pincode(pincode) {
    this.row.pincode = pincode;
  }
  set created_at(created_at) {
    this.row.created_at = created_at;
  }
  set updated_at(updated_at) {
    this.row.updated_at = updated_at;
  }
  static login(pincode, callback) {
    my.query(
      "SELECT * FROM admin WHERE pincode = ?",
      [pincode],
      (err, rows) => {
        if (err) throw err;
        if (rows.length > 0) {
          callback("Bienvenue");
        } else {
          callback("Pincode incorrect");
        }
      }
    );
  }
  static create(pincode, callback) {
    my.query(
      "INSERT INTO admin2 (pincode) VALUES (?)",
      [pincode],
      (err, result) => {
        callback(result);
      }
    );
  }
  static getOne(callback) {
    // Select one admin
    my.query("SELECT * FROM admin2 where id = 1", (err, rows) => {
      
      callback(rows);
    }
    );
  }
}
module.exports = Admin;
