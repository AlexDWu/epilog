//define requirements
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./db/dbModel');

db.init();
//create instance of express server
var app = express();

//set up middleware
app.use(bodyParser.urlencoded({limit: '1gb', extended: true}));
app.use(bodyParser.json());
//serve up static files upon initialization of server
app.use(express.static('images'));


//listen on routes   
require('./config/routes.js')(app);

//set up port for server
var port = process.env.PORT || 3000;

//set server to list on port specified above
app.listen(port, function(){
 console.log('Server listening on port ' + port);
});  

//export server
module.exports = app;
