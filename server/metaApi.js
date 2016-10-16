var express = require('express'),
    path = require('path'),
    packageJson = require('../package.json');




//-----------
// App Setup
//-----------
var meta = express();


// Send index.html by default
meta.get('/version', function(req, res) {
	res.send({ 'version': packageJson['version'] });
});

module.exports = meta;
