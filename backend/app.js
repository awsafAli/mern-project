const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//route all imports



app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

//Route Imports

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

//Middleware for error
app.use(errorMiddleware);

module.exports = app;