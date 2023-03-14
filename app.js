const express = require('express');
const userRoute = require('./routes/userRoute');
const tipspaymentRoute = require('./routes/tipspaymenRoute');
const restauranttableRoute = require('./routes/restauranttableRoute');
const servicesRoute = require('./routes/servicesRoute');
// const adminRoute = require('./routes/adminRoute');
const port = 3003;
const app = express();

app.use(express.urlencoded())
app.use(express.json());

userRoute(app);
tipspaymentRoute(app);
restauranttableRoute(app);
servicesRoute(app);
// adminRoute(app);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);