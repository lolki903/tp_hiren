let my = require ('../config/database');

class TableTips {
    constructor(d) {
        if (d == 0) {
            this.id = null;
            this.created_at = null;
            this.modified_at = null;
            this.tips = null;
            this.id_restaurantTable	 = null;
            this.id_service = null;
        }else{
            this.id = d.id;
            this.created_at = d.created_at;
            this.modified_at = d.updated_at;
            this.tips = d.tips;
            this.id_restaurantTable	 = d.id_restaurantTable;
            this.id_service = d.id_service;
        }
    }

   static all(callback) {
        my.query(
            "SELECT * FROM tableTips JOIN restauranttable ON tableTips.id_restaurantTable = restaurantTable.id JOIN services ON tableTips.id_service = services.id",
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    }

   static create(tips, id_restaurantTable, id_service, callback) {
        my.query(
            "INSERT INTO tableTips (tips, id_restaurantTable, id_service) VALUES (?,?,?)",
            [tips, id_restaurantTable, id_service],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    }
    static find(id, callback) {
        my.query("SELECT * FROM tableTips WHERE id = ?", [id], (err, results) => {
            if (err) throw err;
            callback(new TableTips(results[0]));
        });
    }
    static update(id, tips, id_restaurantTable, id_service, callback) {
        my.query(
            "UPDATE tableTips SET tips = ?, id_restaurantTable = ?, id_service = ? WHERE id = ?",
            [tips, id_restaurantTable, id_service, id],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    }
}
module.exports = TableTips;