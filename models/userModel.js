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
  static all(cb) {
    my.query("SELECT * FROM users", (err, rows) => {
      if (err) throw err;
      cb(rows.map((row) => new User(row)));
    });
  }
  static find(id, cb) {
    my.query("SELECT * FROM users WHERE id = ?", id, (err, rows) => {
      if (err) throw err;
      cb(new User(rows[0]));
    });
  }
  static create(name, description, date, image, cb) {
    my.query(
      "INSERT INTO users (name, description, date, image) VALUES (?, ?, ?, ?)",
      [name, description, date, image],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  }
}
module.exports = User;
