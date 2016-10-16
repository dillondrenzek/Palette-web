var express = require('express'),
    log = require('./server/_logging'),
    metaApi = require('./server/metaApi'),
    path = require('path');




//-----------
// App Setup
//-----------
var app = express();

// Port
app.set('port', (process.env.PORT || 8080));

// Log HTTP requests
app.use('/*', log.httpRequests);

app.use('/meta', metaApi);


// Static files
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));


// Send index.html by default
app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});


// Listen on port 8080
app.listen(app.get('port'), function(){
  log.listening(app.get('port'));
});
