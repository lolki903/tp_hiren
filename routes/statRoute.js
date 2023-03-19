module.exports = (app) => {
    const stat = require("../controllers/statController");
    
    app.route("/stat").get(stat.total);
    app.route("/statuser/:id").get(stat.tipsuser);
    app.route("/statmonth/:id").get(stat.monthtips);
    // app.route("/statweek/:id").get(stat.weektips);

    }