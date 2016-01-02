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
	zipcode = parseInt(zipcode)
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
	var plus6 = zipcode + 6
	var plus7 = zipcode + 7
	var plus8 = zipcode + 8
	var plus9 = zipcode + 9
	var plus10 = zipcode + 10
	var minus6 = zipcode - 6
	var minus7 = zipcode - 7
	var minus8 = zipcode - 8
	var minus9 = zipcode - 9
	var minus10 = zipcode - 10
	console.log('zipcodes being queried',zipcode,plus1,plus2,plus3,plus4,plus5,minus1,minus2,minus3,minus4,minus5,plus6,plus7,plus8,plus9,plus10,minus6,minus7,minus8,minus9,minus10)
	console.log('same thing', (zipcode + 1))
	q = zips.find({ 'zip':{$in:[zipcode,minus1,minus2,minus3,minus4,minus5,plus1,plus2,plus3,plus4,plus5,plus6,plus7,plus8,plus9,plus10,minus6,minus7,minus8,minus9,minus10]}});
	// q = zips.find({'zip':{$in:[zipcode,plus1,minus1]}})
    q.exec(function(err, data) {
    //loop over array of objects and create new array of objects of unique zips and number of their occurences

    function toArray (array) {
	    distinct = []
	    for (var i = 0; i < array.length; i++) {
	            if ((array[i].zip in distinct) == false) {
	                distinct.push(array[i].zip)
	             }
	    }
	    return distinct
	}

	function foo(arr) {
	    var a = [], b = [], prev;

	    arr.sort();
	    for ( var i = 0; i < arr.length; i++ ) {
	        if ( arr[i] !== prev ) {
	            a.push(arr[i]);
	            b.push(1);
	        } else {
	            b[b.length-1]++;
	        }
	        prev = arr[i];
	    }
	    return [a, b];
	}

	function combine(names, values) {
	    var result = {};
	    for (var i = 0; i < names.length; i++)
	         result[names[i]] = values[i];
	    return result;
	}
	console.log(data)

	var unique = toArray(data) // returns ['a', 1, 2, '1']
	unique = foo(unique)
	unique = combine(unique[0],unique[1])

	console.log(unique)
	res.send(unique)

    });
});

router.get('/map', function(req, res, next) {
	console.log(req.body.zipcode)
	res.render('map')
});

module.exports = router;
