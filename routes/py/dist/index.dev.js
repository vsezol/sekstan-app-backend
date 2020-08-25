"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../../wss/senders'),
    sendResult = _require2.sendResult;

router.get('/', function (req, res) {
  var store = global.store;

  if (store.currLamp.name && store.currLamp.type) {
    var pyq = req.query;
    var OC = +pyq.degs * 60 + +pyq.mins;
    var T = pyq.time;
    var date = pyq.date;
    var value = pyq.value;
    var payload = {
      OC: OC,
      T: T,
      date: date,
      value: value
    };
    store.currLampObj = payload;
    payload.request = 'RESULT';
    sendResult(payload);
  }

  res.sendStatus(200);
});
module.exports = router;