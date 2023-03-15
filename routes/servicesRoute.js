module.exports = (app) => {
  const services = require("../controllers/servicesController");

  app.route("/services").post(services.create).get(services.list);
    app.route("/services/:id").put(services.update);
    app.route("/services/:id").delete(services.delete);
    
};
