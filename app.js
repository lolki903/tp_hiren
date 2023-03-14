let express = require('express');
const userRoute = require('./routes/userRoute');
const tipspaymentRoute = require('./routes/tipspaymenRoute');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

userRoute(app);
tipspaymentRoute(app);

app.listen(3003)