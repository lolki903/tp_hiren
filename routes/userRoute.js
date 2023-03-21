module.exports = (app) => {
  const auth = require('../middleware/authentification');
  const user = require("../controllers/userController");

  // Create a new user
  app.route("/user").post(auth,user.register).get(auth,user.getUsers);
  app.route("/user/:id").get(auth,user.getUser);
  app.route("/user/delete/:id").put(auth,user.deleteUser);
};
