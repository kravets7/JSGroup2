/**
 * Created by dragonus on 23.04.15.
 */


var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());

app.get('/info', function(reg, res, next) {
    res.status(200).send({success: 'Hello, World!'});
});

//app.get('/info2', function(reg, res, next) {
//    res.redirect(301, 'http://pornhub.com');
//});

app.post('/info', function(reg, res, next) {
    var body = reg.body;
    if( !body.key ) {
        var err = new Error('Not key');

        return res.status(500).send({error: err.message + ' ' + err.stack});
    }
    res.status(200).send(body);
});


app.listen(3030, function() {
    console.log('Server start on port = 3030')
});