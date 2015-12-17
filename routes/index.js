var express = require('express');
var router = express.Router();
var medical_data = require('../model/Medical_Data')


router.get('/', function(req, res, next) {
	console.log(medical_data, "medical_data is...")
    medical_data.find({'State':'CT'}, function(err, data) {
    res.json(data);
    });
 });

module.exports = router;
