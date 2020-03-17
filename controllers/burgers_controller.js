var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data //id,burger_name,devoured(boolean)
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req,res){
  burger.insertOne(req.body.burger_name,function(result){
    res.json({id: result.insertId});
  });
});





module.exports = router;







/*
router.get("/", function(req, res) {
    burger_model.all(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/cats", function(req, res) {
    cat.create([
      "name", "sleepy"
    ], [
      req.body.name, req.body.sleepy
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update({
      sleepy: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
*/