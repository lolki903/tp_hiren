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
}