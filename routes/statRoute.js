module.exports = (app) => {
    const stat = require("../controllers/statController");
    
    app.route("/stat").get(stat.total);
    app.route("/statuser/:id").get(stat.tipsuser);
    }