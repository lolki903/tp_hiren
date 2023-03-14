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
  static create(fisrtname, lastname, status, callback) {
     // let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    my.query(
      "INSERT INTO users (firstname, lastname, status) VALUES (?,?,?)",
      [fisrtname, lastname, status],
      (err, result) => {
        if (err) throw err;
        callback(result.insertId);
      }
    );
  }
  static all(callback) {
    my.query("SELECT * FROM users", (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
  static find(id, callback) {
    my.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
      if (err) throw err;
      callback(new User(results[0]));
    });
  }
}
module.exports = User;
