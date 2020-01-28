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

app.use(express.static("public"));
var syncOptions = { force: true };

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync(syncOptions).then(function() {
    console.log(Object.keys(db));
    createMock();
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});