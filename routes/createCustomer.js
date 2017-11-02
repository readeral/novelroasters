var express = require("express");
var router = express.Router();

var app = express();
var config = require(".././config.json")[app.get("env")];

var unirest = require("unirest");
var base_url = "https://connect.squareup.com/v2";

router.post("/", function(req, res, next) {
  var request_params = req.body;
  console.log(req.body);

  var token = require("crypto")
    .randomBytes(64)
    .toString("hex");

  request_body = {
    given_name: request_params.given_name,
    family_name: request_params.family_name,
    email_address: request_params.email_address,
    address: {
      address_line_1: request_params.address.address_line_1,
      address_line_2: request_params.address.address_line_2,
      locality: request_params.address.locality,
      administrative_district_level_1:
        request_params.address.administrative_district_level_1,
      postal_code: request_params.address.postal_code,
      country: request_params.address.country
    },
    phone_number: request_params.phone_number,
    reference_id: token,
    note: "a customer"
  };

  unirest
    .post(base_url + "/customers")
    .headers({
      Authorization: "Bearer " + config.squareAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json"
    })
    .send(request_body)
    .end(function(response) {
      if (response.body.errors) {
        console.log("error!!");
        return res.json({ status: 400, errors: response.body.errors });
      } else {
        console.log("ok!!");
        return res.json({ status: 200, response: response.body.customer });
      }
    });
});

module.exports = router;
