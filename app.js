const express = require("express");
/* Routes */
const userRoute = require("./routes/userRoute");
const tipspaymentRoute = require("./routes/tipspaymenRoute");
const restauranttableRoute = require("./routes/restauranttableRoute");
const servicesRoute = require("./routes/servicesRoute");
const adminRoute = require("./routes/adminRoute");
const tableTipsRoute = require("./routes/tableTipsRoute");
const servicesUserRoute = require("./routes/servicesUserRoute");
const statRoute = require("./routes/statRoute");
/* PORT */
const port = 3003;
const app = express();

app.use(express.urlencoded());
app.use(express.json());

/* SWAGGER */
const swaggerUi = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API REST",
      description: "API batdev",
      contact: {
        name: "Batdev",
      },
      servers: ["http://localhost:3003"],
    },
  },
  apis: ["app.js", "./swagger.js", "./routes/*js"],
};
const swaggerDocs = swaggerjsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/* APPEL ROUTES */
userRoute(app);
tipspaymentRoute(app);
restauranttableRoute(app);
servicesRoute(app);
tableTipsRoute(app);
servicesUserRoute(app);
adminRoute(app);
statRoute(app);
/* SWAGGER USER */
/**
 * @swagger
 * /user:
 *  get:
 *      description: Get all users
 *      responses:
 *          '200':
 *              description: A successful response
 */

/* Server */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
