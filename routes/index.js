var express = require('express');
var router = express.Router();
var medical_data = require('../model/Medical_Data')


router.get('/', function(req, res, next) {
	res.render('index');
 });

router.get('/data', function(req, res, next) {
    q = medical_data.find({'City':'SAN FRANCISCO'}).limit(10)
    q.exec(function(err, data) {
    	res.json(data)
    });
 });

router.get('/map', function(req, res, next) {
	res.render('map')
})

module.exports = router;
