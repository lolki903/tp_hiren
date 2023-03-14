let restauranttablecontroller = require('../controllers/restauranttableController');

module.exports = (app) => {
    app.route('/restauranttable')
        .post(restauranttablecontroller.create)
        .get(restauranttablecontroller.list)
}