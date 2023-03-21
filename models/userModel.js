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
  get fisrtname() {
    return this.row.firstname;
  }
  get lastname() {
    return this.row.lastname;
  }
  get status() {
    return this.row.status;
  }
  get created_at() {
    return moment(this.row.created_at).format("LL");
  }
  get updated_at() {
    return moment(this.row.updated_at).format("LL");
  }
  get active() {
    return this.row.active;
  }
  set id(id) {
    this.row.id = id;
  }
  set fisrtname(fisrtname) {
    this.row.fisrtname = fisrtname;
  }
  set lastname(lastname) {
    this.row.lastname = lastname;
  }
  set status(status) {
    this.row.status = status;
  }
  set created_at(created_at) {
    this.row.created_at = created_at;
  }
  set updated_at(updated_at) {
    this.row.updated_at = updated_at;
  }
  set active(active) {
    this.row.active = active;
  }
  static create(fisrtname, lastname, status,active, callback) {
     // let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    my.query(
      "INSERT INTO users (firstname, lastname, status, active) VALUES (?,?,?,?)",
      [fisrtname, lastname, status, active],
      (err, result) => {
        if (err) throw err;
        callback(result.insertId);
      }
    );
  }
  static all(callback) {
    my.query("SELECT * FROM users", (err, results) => {
      callback(results.map((row) => new User(row)));
    });
  }
  static find(id, callback) {
    my.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
      if (err) throw err;
      callback(new User(results[0]));
    });
  }
  static update(id, fisrtname, lastname, status,active, callback) {
    my.query(
      "UPDATE users SET firstname = ?, lastname = ?, status = ?, active = ? WHERE id = ?",
      [fisrtname, lastname, status, active, id],
      (err, result) => {
        if (err) throw err;
        callback(result);
      }
    );
  }
  static delete(anonyme, id, callback) {
    my.query("UPDATE users SET lastname = ?, firstname = ? WHERE id = ?", [anonyme,anonyme,id], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  }
}
module.exports = User;
