var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
    insertOne: function(table, col, val, cb) {
        orm.insertOne("cats", cols, vals, function(res) {
        cb(res);
       });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function(res) {
        cb(res);
       });
    }
};

module.export = burger;