var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
import * as test from "./test"
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
test.printTest()