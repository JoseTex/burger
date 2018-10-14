var express = require("express");
var Burger = require("../models/burger.js");
var router = express.Router();

//Read
router.get('/', function(req,res) {
	console.log("get")
	Burger.selectAll(function(data){
		var hbsObject = {
			burger : data
		}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

//Create
router.post('/burger', function(req,res) {
	console.log("create");
	Burger.insertOne([
		"name", "devoured"
	],[
		req.body.burger_name, req.body.devoured
	], function(result){
		res.json({ id: result.insertId });
	});
});

//Update
router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	Burger.updateOne({
		devoured : req.body.devoured
	}, condition, function(result) {
		if (result.changedRows == 0) {
		  // If no rows were changed, then the ID must not exist, so 404
		  return res.status(404).end();
		} else {
		  res.status(200).end();
		}
	  });
	});

module.exports = router;