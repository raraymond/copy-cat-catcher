var express = require("express");
var router = express.Router();

const tineyeController = require("../controller/tineyeController/tineyeController");

var TinEye = require("tineye-api");
var api = new TinEye(
    "https://api.tineye.com/rest/",
    "	LCkn,2K7osVwkX95K4Oy",
    "6mm60lsCNIB,FwOWjJqA80QZHh9BMwc-ber4u=t^"
);

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/search/", tineyeController.searchResultsGet);

module.exports = router;