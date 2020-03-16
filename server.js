var express = require("express");

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
 




//Test orm.js
/* var orm = require("./config/orm.js");
var callback = function(data){
    console.log(data);
}; */
//Test orm.selectAll()
// orm.selectAll("burgers",callback);

//Test orm.insertOne()
// orm.insertOne('burgers','burger_name','cheeseburger',callback);

//Test orm.updateOne()
//orm.updateOne('burgers','devoured',true,'id',2,callback);

//Test burger.js
/* var burger = require("./models/burger.js");
var callback = function(data){
    console.log(data);
}; */
//Test burger.selectAll()
//burger.selectAll(callback);

//Test burger.insertOne()
//burger.insertOne('veggie burger',callback);

//Test burger.updateOne()
//burger.updateOne('id',4,callback);



