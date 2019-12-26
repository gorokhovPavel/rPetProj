var router = require('express').Router();
var data = require('../source/data');

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout( ()=> {
    res.status(status).json(body);
  }, timeout);

router.get("/cities", function(req, res, next) {
  reply(res, data.weatherСities);
});

module.exports = router;