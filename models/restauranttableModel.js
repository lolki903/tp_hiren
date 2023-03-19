let my = require("../config/database");
let moment = require("moment");
moment.locale("fr");
class RestaurantTable {
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
    get name () {
        return this.row.name;
    }
    set name (name) {
        this.row.name = name;
    }
    set id(id) {
        this.row.id = id;
    }
    set created_at(created_at) {
        this.row.created_at = created_at;
    }
    set updated_at(updated_at) {
        this.row.updated_at = updated_at;
    }
    static all(callback) {
        my.query("SELECT * FROM restaurantTable", (err, results) => {
            callback(results.map((row) => new RestaurantTable(row)));
        });
    }
    static create(name, callback) {
        my.query("INSERT INTO restaurantTable (name) VALUES (?)", [name], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
    static update(id, name, callback) {
        my.query("UPDATE restaurantTable SET name = ? WHERE id = ?", [name, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}
module.exports = RestaurantTable;