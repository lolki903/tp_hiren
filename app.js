const express = require('express');
const userRoute = require('./routes/userRoute');
const tipspaymentRoute = require('./routes/tipspaymenRoute');
const restauranttableRoute = require('./routes/restauranttableRoute');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

userRoute(app);
tipspaymentRoute(app);
restauranttableRoute(app);

app.listen(3003)