let my = require('../config/database');

class ServicesUser {
    static all(callback) {
        my.query(
            "SELECT * FROM servicesUsers",
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    }

    static create(id_service,id_user,callback) {
        // let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        my.query("INSERT INTO servicesUsers (id_service,id_user) VALUES (?,?)", [id_service,id_user], (err, result) => {
            if (err) throw err;
            callback(result);
        }
        );
    }

    static find(id, callback) {
        my.query(
            "SELECT * FROM servicesUsers WHERE id = ?",
            [id],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    }

    static delete(id, callback) {
        my.query(
            "DELETE FROM servicesUsers WHERE id = ?",
            [id],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    }
}