var express = require('express');
var router = express.Router();
var medical_data = require('../model/Medical_Data')


router.get('/', function(req, res, next) {
	res.render('index');
 });

router.get('/data', function(req, res, next) {
    medical_data.findOne({'State':'AZ'}, function(err, data) {
    	res.json(data);
    });
 });

module.exports = router;
