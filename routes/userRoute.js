module.exports = (app) => {
    const user = require('../controllers/userController');

    // Create a new user
    app.route('/user')
        .post(user.register)
        .get(user.getUsers)
    app.route('/user/:id')
        .get(user.getUser)
}