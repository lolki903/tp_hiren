let my = require("../config/database");
let moment = require("moment");
moment.locale("fr");
class Service {
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
    get shiftType() {
        return this.row.shiftType;
    }
    get shiftClosed () {
        return this.row.shiftClosed;
    }
    set shiftClosed (shiftClosed) {
        this.row.shiftClosed = shiftClosed;
    }
    set id(id) {
        this.row.id = id;
    }
    set shiftType(shiftType) {
        this.row.shiftType = shiftType;
    }
     static create(shiftType,shiftClosed, callback) {
        my.query("INSERT INTO services SET shiftType = ? , shiftClosed = ?", [shiftType,shiftClosed], (err, result) => {
            if (err) throw err;
            callback(result.insertId);
        });
    }
     static all(callback) {
        my.query("SELECT * FROM services", (err, results) => {
            if (err) throw err;
            callback(results.map((row) => new Service(row)));
        });
    }
     static find(id, callback) {
        my.query("SELECT * FROM services WHERE id = ?", [id], (err, results) => {
            if (err) throw err;
            callback(new Service(results[0]));
        });
    }
    static update(id,shiftClosed, callback) {
        my.query("UPDATE services SET shiftClosed = ? WHERE id = ?", [shiftClosed, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}
module.exports = Service;
