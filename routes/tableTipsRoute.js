module.exports = (app) => {
    const tabletips = require("../controllers/tableTipsController");
    
    app.route("/tabletips").post(tabletips.create).get(tabletips.list);
    app.route("/tabletips/:id").put(tabletips.update);
    app.route("/tabletips/:id").delete(tabletips.delete);
    };