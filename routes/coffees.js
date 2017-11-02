var express = require("express");
var router = express.Router();

var app = express();
var config = require(".././config.json")[app.get("env")];

var unirest = require("unirest");
var base_url = "https://connect.squareup.com/v2";

router.get("/", function(req, res, next) {
  query = "types=item";

  unirest
    .get(base_url + "/catalog/list")
    .headers({
      Authorization: "Bearer " + config.squareAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json"
    })
    //if this doesn't work, use + query on the end of the get URL
    .query({
      types: "item,category"
    })
    .end(function(response) {
      if (response.body.errors) {
        console.log("error!!" + JSON.stringify(response.body.errors));
        return res.json({ status: 400, errors: response.body.errors });
      } else {
        console.log("ok!!");
        return res.json({ data: response.body.objects });
      }
    });
});

module.exports = router;
