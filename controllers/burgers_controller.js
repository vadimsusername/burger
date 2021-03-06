var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data //id,burger_name,devoured(boolean)
    };
   // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req,res){
  burger.insertOne(req.body.burger_name,function(result){
    res.json({id: result.insertId});
  });
});

router.put("/api/devour/:id", function(req,res){
  burger.updateOne('id',req.params.id, function(result){
      //console.log(result);
      res.json({result});
  });
});



module.exports = router;







