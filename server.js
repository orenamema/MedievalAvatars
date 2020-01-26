var express = require("express");
var db = require("./models");
var app = express();
var createMock = require("./mockData/mockData.js");
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var routes = require("./controllers/burgers_controller.js");
app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// sample data
var sample_user = {"userName": "test_user",
                   "password": "test_password",
                   "createdAt": Date(), 
                   "updatedAt": Date()
                   };

db.sequelize.sync().then(function() {
    console.log(Object.keys(db));
    createMock();
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});