var express = require("express");
var router = express.Router();

var app = express();
var config = require(".././config.json")[app.get("env")];

var unirest = require("unirest");
var base_url = "https://connect.squareup.com/v2";

router.post("/", function(req, res, next) {
  console.log(req.body.email_address);
  var emailCheck = req.body.email_address;

  var token = require("crypto")
    .randomBytes(64)
    .toString("hex");

  unirest
    .get(base_url + "/customers")
    .headers({
      Authorization: "Bearer " + config.squareAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json"
    })
    .end(function(response) {
      if (response.body.errors) {
        console.log("error!!");
        console.log(amount);
        return res.json({ status: 400, errors: response.body.errors });
      } else {
        let matchingCustomer = response.body.customers.filter(
          email => email.email_address === emailCheck
        );
        if (matchingCustomer.length > 0) {
          console.log("hooray!");
          return res.json({ status: 200, response: matchingCustomer[0].id });
        } else {
          return res.json({ status: 200, response: "new customer" });
        }
      }
    });
});

module.exports = router;
