/**
 * Created by dragonus on 23.04.15.
 */

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

//app.use(bodyparser.json());
//
//app.get('/info', function(reg, res, next) {
//    res.status(200).send({success: 'Hello, World!'});
//});
//
////app.get('/info2', function(reg, res, next) {
////    res.redirect(301, 'http://pornhub.com');
////});
//
//app.post('/info', function(reg, res, next) {
//    var body = reg.body;
//    if( !body.key ) {
//        var err = new Error('Not key');
//
//        return res.status(500).send({error: err.message + ' ' + err.stack});
//    }
//    res.status(200).send(body);
//});

//
//function checkIt(req, res, next) {
//    console.log('we suck');
//    var err = new Error('Bad request');
//    err.status = 403;
//    next(err);
//};

function errHandler (err, req, res, next) {
    var status = err.status || 500;
    var message = err.message + '\n\r' + err.stack;
    //TODO check env production || development

    res.status(status).send(message);
    console.log(app.get('env'));
};

app.use(function(req, res, next) {
    var ip = req.ip;
    console.log(ip);
    if (/::|127.0/.test(ip)) {
        return next();
    }
    var err = new Error('Bad request');
    err.status = 403;
    next(err);
});

app.all('*', function(req, res, next) {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx');
    next();
});

app.get('/' /*, checkIt*/, function(req, res, next) {
    console.log(req.headers['user-agent']);
    res.status(200).send('You suck!');
});

app.use(errHandler);


app.listen(3030, function() {
    console.log('Server start on pron = 3030')
});

