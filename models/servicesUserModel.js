let my = require('../config/database');

class ServicesUser {
    static all(callback) {
        my.query(
            "SELECT * FROM servicesUsers JOIN services ON servicesUsers.id_service = services.id JOIN users ON servicesUsers.id_user = users.id",
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

    static update(id, id_service,id_user, callback) {
        my.query(
            "UPDATE servicesUsers SET id_service = ?, id_user = ? WHERE id = ?",
            [id_service,id_user, id],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        );
    }
}