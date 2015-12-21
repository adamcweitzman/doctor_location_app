var express = require('express');
var router = express.Router();
var medical_data = require('../model/Medical_Data')


router.get('/', function(req, res, next) {
	// console.log(medical_data, "medical_data is...")
 //    medical_data.find({'State':'AZ'}, function(err, data) {
    // });
	res.render('index');
 });

router.get('/data', function(req, res, next) {
	client_data = [4, 8, 15, 16, 23, 42]
	res.json(client_data);
 });

module.exports = router;
