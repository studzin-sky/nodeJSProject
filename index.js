"use strict";
exports.__esModule = true;
var myModule = require('./my-module');
var fs_1 = require("fs");
var express = require('express');
console.log(myModule);
var app = express();
app.get('/', function (request, response) {
    (0, fs_1.readFile)('./home.html', 'utf8', function (err, html) {
        if (err) {
            response.status(500).send('something went wrong on the server');
        }
        response.send(html);
    });
});
app.listen(process.env.PORT || 3000, function () { return console.log('App available on localhost:3000'); });
