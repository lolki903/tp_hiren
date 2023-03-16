let my = require("../config/database");
let moment = require("moment");
moment.locale("fr");
class TipsPayment {
    constructor(TipsPayment) {
        this.row = TipsPayment;
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
    get amount() {
        return this.row.amount;
    }
    get id_user() {
        return this.row.id_user;
    }
    set id(id) {
        this.row.id = id;
    }
    set amount(amount) {
        this.row.amount = amount;
    }
    set id_user(id_user) {
        this.row.id_user = id_user;
    }
    set created_at(created_at) {
        this.row.created_at = created_at;
    }
    set updated_at(updated_at) {
        this.row.updated_at = updated_at;
    }
    static create(amount, id_user, callback) {
        my.query("INSERT INTO tipsPayments (amount, id_user) VALUES (?,?)", [amount, id_user], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
    static all(callback) {
        my.query("SELECT * FROM tipsPayments", (err, results) => {
            if (err) throw err;
            callback(results.map((row) => new TipsPayment(row)));
        });
    }
    static find(id, callback) {
        my.query("SELECT * FROM tipsPayments WHERE id = ?", [id], (err, results) => {
            if (err) throw err;
            callback(new TipsPayment(results[0]));
        });
    }
    static update(id, amount, id_user, callback) {
        my.query("UPDATE tipsPayments SET amount = ?, id_user = ? WHERE id = ?", [amount, id_user, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
    static delete(id, callback) {
        my.query("DELETE FROM tipsPayments WHERE id = ?", [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}
module.exports = TipsPayment;