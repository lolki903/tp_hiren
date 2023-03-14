module.exports = (app) => {
    const tipspayment = require('../controllers/tipspaymentController');

    // Create a new user
    app.route('/tipspayment')
        .post(tipspayment.create)
        .get(tipspayment.list)
    // app.route('/tipspayment/:id')
    //     .get(user.getUser)
}