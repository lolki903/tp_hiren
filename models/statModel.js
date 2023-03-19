const my = require("../config/database");

class Stat {
    constructor(row) {
        this.row = row;
    }
    
    static stattotal (callback) {
        // addtionne les tips de la table tips
        my.query("SELECT SUM(tips) AS total FROM tableTips", (err, rows) => {
            if (err) throw err;
            callback(rows);
        }
        );
    }
    static usersTips (id,callback) {
        // addtionne les tips de la tableTips
        my.query("SELECT SUM(amount) AS total FROM tipsPayments JOIN users ON tipsPayments.id_user = users.id WHERE tipsPayments.id_user = ?",[id], (err, rows) => {
            if (err) throw err;
            callback(rows);
        }
        );
    }

    static month (id,callback) {
        my.query("SELECT SUM(tips) AS total FROM tableTips WHERE MONTH(created_at) = ? ",[id], (err, rows) => {
            if (err) throw err;
            callback(rows);
        })
    }
    static week (id,callback) {
        // addtionne les tips de la table tips
        my.query("SELECT SUM(tips) AS total FROM tableTips WHERE WEEK(created_at) = ? ",[id], (err, rows) => {
            if (err) throw err;
            callback(rows);
        })
    }

    
}

module.exports = Stat;