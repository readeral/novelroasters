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

  //multiplying value by 100 in order to provide Square with value in cents, as 'amount' comes through in dollars
  var amount = request_params.amount * 100;

  request_body = {
    card_nonce: request_params.nonce,
    location_id: request_params.locationId,
    order_id: request_params.id,
    customer_id: request_params.customer_id,
    shipping_address: request_params.shipping_address,
    buyer_email_address: request_params.email,
    amount_money: {
      amount: amount,
      currency: "AUD"
    },
    idempotency_key: token
  };

  unirest
    .post(base_url + "/locations/" + locationId + "/transactions")
    .headers({
      Authorization: "Bearer " + config.squareAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json"
    })
    .send(request_body)
    .end(function(response) {
      if (response.body.errors) {
        console.log("error!!");
        console.log(amount);
        return res.json({ status: 400, errors: response.body.errors });
      } else {
        console.log("ok!!");
        return res.json({ status: 200, response: response.body.transaction });
      }
    });
});

module.exports = router;
