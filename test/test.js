var wget = require('../lib/wget');
var expect = require('chai').expect;
var express = require('express');
var app = express();

before(function() {
    app.get('/', function (req, res) {
        res.download(__dirname + '/data/' + 'sample.json');
    });

    var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
    });
});

describe('request', function() {
    it('should be able to perform a get request', function() {
        var download = wget.download('http://127.0.0.1:3000/', '/tmp/test.json');
        download.on('progress', function(progress) {
            console.log(progress);
        });

        download.on('error', function(err) {
            console.log(err);
        })
    });
});