module.exports = (app) => {
    const admin = require("../controllers/adminController");
    app.route("/admin").post(admin.authenticateAdmin)
    app.route("/createadmin").post(admin.createAdmin)
};