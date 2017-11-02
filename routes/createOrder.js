var express = require("express");
var router = express.Router();

var app = express();
var config = require(".././config.json")[app.get("env")];

var unirest = require("unirest");
var base_url = "https://connect.squareup.com/v2";

router.post("/", function(req, res, next) {
  var request_params = req.body;

  var token = require("crypto")
    .randomBytes(64)
    .toString("hex");

  locationId = "B5GH5V72WQ9AY";
  console.log(request_params.line_items);
  request_body = {
    idempotency_key: token,
    reference_id: request_params.reference_id,
    line_items: request_params.line_items
  };

  unirest
    .post(base_url + "/locations/" + locationId + "/orders")
    .headers({
      Authorization: "Bearer " + config.squareAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json"
    })
    .send(request_body)
    .end(function(response) {
      if (response.body.errors) {
        console.log("error!!");
        return res.json({
          status: 400,
          errors: response.body.errors,
          response: response.body.order
        });
      } else {
        console.log("ok!!");
        return res.json({ status: 200, response: response.body.order });
      }
    });
});

module.exports = router;
