var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString,[table], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });                                                                                                                                                          
    },
    insertOne: function(table, col, val, cb) {
      var queryString = `INSERT INTO  ?? (??) VALUES (?)`;
  
      //console.log(queryString);
  
      connection.query(queryString,[table,col,val], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    updateOne: function(table, col, val, whereCol, whereVal, cb) {
      var queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
  
     // console.log(queryString);
      connection.query(queryString,[table,col,val,whereCol,whereVal], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };

  module.exports = orm;
