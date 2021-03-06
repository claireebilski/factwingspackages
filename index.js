var express = require('express')
var app = express()
var mongo = require('mongodb');
var db = mongo('localhost:27017/factwings');

app.use(function(req, res, next) {
    req.db = db;
    next();
});


app.get('/factbook/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('factbook');
    collection.find({ "Communications.Internet country code.text": "."+req.params.id }, {}, function(e, docs) {
        res.send(docs);
    });
})

app.set('json spaces', 2);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

.catch((error) => {
  assert.isNotOk(error,'Promise error');
  done();
});
