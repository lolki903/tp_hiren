module.exports = (app) => {
    const servicesUser = require("../controllers/servicesUserController");
    app.route("/servicesUser").post(servicesUser.create).get(servicesUser.list);
    app.route("/servicesUser/:id").put(servicesUser.update);
    app.route("/servicesUser/:id").delete(servicesUser.delete);
    }