var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var coffees = require("./routes/coffees");
var config = require("./routes/config");
var chargeCard = require("./routes/chargeCard");
var createOrder = require("./routes/createOrder");
var coffees = require("./routes/coffees");
var coffees2 = require("./routes/coffees2");
var getCustomer = require("./routes/getCustomer");
var createCustomer = require("./routes/createCustomer");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "novel/build")));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", index);
app.use("/coffees2", coffees2);
app.use("/config", config);
app.use("/charge_card", chargeCard);
app.use("/create_order", createOrder);
app.use("/coffees", coffees);
app.use("/get_customer", getCustomer);
app.use("/create_customer", createCustomer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  console.log("not found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
  console.log(err.message);
});

module.exports = app;
