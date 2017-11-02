var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json({
    categories: [
      {
        name: "The Classics",
        desc: "our classic blends",
        long:
          "Two specially developed blend options, predictable and best for espresso drinkers",
        coffees: [
          {
            name: "novel blend",
            desc:
              "A tasty and popular blend to suit most tastes. Smooth, medium roasted for a balanced milk based coffee",
            active: true,
            available: true
          },
          {
            name: "Epic Blend",
            desc:
              "For those with a taste for adventure, Epic is a more lively blend for those who prefer  black coffees",
            active: true,
            available: true
          },
          {
            name: "Fake Blend",
            desc: "This blend does not exist",
            active: false,
            available: false
          }
        ]
      },
      {
        name: "Short Stories",
        desc: "limited time single origins",
        long:
          "A limited option of rotating single origin coffees, varying by season suits both espresso drinkers or manual brewers",
        coffees: [
          {
            name: "ethiopia yirgacheffe aricha",
            desc:
              "Apricot acidity, with a mild honey/malt sweetness and caramel aftertaste",
            active: true,
            available: true
          },
          {
            name: "Brazil Bla De BlaBlaBla",
            desc: "chocolatey nutty something-a-rather",
            active: true,
            available: true
          },
          {
            name: "PNG Mt Ambra",
            desc: "Shitty coffee from CoffeeSnobs",
            active: false,
            available: false
          }
        ]
      },
      {
        name: "Westerns",
        desc: "a surprise coffee option",
        long:
          "For those that like to walk on the wild side, there's only room for one coffee in this town. I'll select for you A standout coffee of the week, or maybe some coffee I'm experimenting with to try",
        coffees: [
          {
            name: "blind date",
            desc: "",
            active: true,
            available: true
          },
          {
            name: "new kid",
            desc: "",
            active: true,
            available: false
          }
        ]
      },
      {
        name: "Tragedies",
        desc: "10 single-serve decaf packs",
        long:
          "For those whose love of coffee would render them a coffee tragic - you're probably in need of some decaf every once in a while... it might make you cry, but it's good for the heart",
        coffees: [
          {
            name: "Deca-Decaf",
            desc: "",
            active: true,
            available: false
          },
          {
            name: "All In",
            desc: "",
            active: true,
            available: false
          }
        ]
      }
    ],
    sizes: [
      {
        name: "pickup",
        rules: "(Newtown, Sydney)",
        desc: "",
        options: [
          {
            size: "200g",
            cost: 9
          },
          {
            size: "400g",
            cost: 15
          },
          {
            size: "600g",
            cost: 22
          }
        ]
      },
      {
        name: "posted",
        rules: "(Australia Only)",
        desc: "Especially priced/sized for AusPost parcel sizes",
        options: [
          {
            size: "225g",
            cost: 14
          },
          {
            size: "450g",
            cost: 25
          }
        ]
      }
    ]
  });
});

module.exports = router;
