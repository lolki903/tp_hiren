module.exports = (app) => {
  const restauranttablecontroller = require("../controllers/restauranttableController");
  app.route("/restauranttable")
    .post(restauranttablecontroller.create)
    .get(restauranttablecontroller.list);
  app.
    route("/restauranttable/:id")
    .put(restauranttablecontroller.update)
    // .delete(restauranttablecontroller.delete);
};
