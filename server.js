// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));02
app.use(bodyParser.json());
// parse application/json
app.use(bodyParser.text());
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))


console.log(require);

require('./app/routing/htmlRoutes.js')(app);
console.log(require);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});