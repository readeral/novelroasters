var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.json({
    development: [
      {
        squareApplicationId: "sandbox-sq0idp-LgbBgJ0kr8vRVqRmLqXfAg",
        squareAccessToken: "sandbox-sq0atb-SaUdXACgl-fpAUpzjPYjgw",
        locationId: "CBASEGyDgn6jPYS2HJ8kPq1csFYgAQ"
      }
    ],
    production: [
      {
        squareApplicationId: "prod-application-id-here",
        squareAccessToken: "prod-access-token-here",
        locationId: "CBASEGyDgn6jPYS2HJ8kPq1csFYgAQ"
      }
    ]
  });
});
module.exports = router;
