var express = require('express');
var router = express.Router();
var zips = require('../model/Zips')

router.get('/', function(req, res, next) {
	res.render('index');
 });

// router.get('/data', function(req, res, next) {
//     q = zips.distinct('zip')
//     q.exec(function(err, data) {
//     	res.json(data)
//     });
//  });

router.get('/data', function(req, res, next) {
    q = zips.find({}).limit(10)
    q.exec(function(err, data) {
    	res.json(data)
    });
 });

//db.collection.find( { field: { $gt: value1, $lt: value2 } } );

router.post('/upload', function(req, res, next) {
	console.log(req.body.zipcode)
	var zipcode = req.body.zipcode
	var plus1 = zipcode + 1
	var plus2 = zipcode + 2
	var plus3 = zipcode + 3
	var plus4 = zipcode + 4
	var plus5 = zipcode + 5
	var minus1 = zipcode - 1
	var minus2 = zipcode - 2
	var minus3 = zipcode - 3
	var minus4 = zipcode - 4
	var minus5 = zipcode - 5
	q = zips.find({ 'zip':{$in:[zipcode,plus1,plus2,plus3,plus4,plus5,minus1,minus2,minus3,minus4,minus5]}});
	// q = zips.find({'zip':zipcode}).limit(10)
    q.exec(function(err, data) {
    	console.log(data)
    	// res.json(data)
    });
});

router.get('/upload', function(req, res, next) {
	console.log('here')
});

router.get('/map', function(req, res, next) {
	console.log(req.body.zipcode)
	res.render('map')
});

module.exports = router;
