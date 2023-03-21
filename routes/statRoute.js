module.exports = (app) => {
    const auth = require('../middleware/authentification');
    const stat = require("../controllers/statController");
    
    app.route("/stat").get(auth,stat.total);
    app.route("/statuser/:id").get(auth,stat.tipsuser);
    app.route("/statmonth/:id").get(auth,stat.monthtips);
    // app.route("/statweek/:id").get(stat.weektips);

    }