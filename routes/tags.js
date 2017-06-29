var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tags', {
    title: 'Express'
    , tags: [
      "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking", "party", "hicking"
      , "party", "hicking", "party", "hicking",
    , ]
  });
});

module.exports = router;
