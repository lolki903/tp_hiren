module.exports = (app) => {
    const services = require("../controllers/servicesController");
  
    app.route("/services").post(services.create).get(services.list);
  };
  