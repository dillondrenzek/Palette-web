module.exports = {

  httpRequests: function(req, res, next) {
    var method = req.method.toUpperCase();
    var url = req.originalUrl;

    console.log(method, url);
    next();
  },

  listening: function(port) {
    console.log("\n");
    console.log("> --------   Server START   --------");
    console.log(">");
  	console.log(">  Port:   "+port);
  	console.log(">  Url:    http://localhost:"+port);
    console.log(">");
    console.log("> ----------------------------------");
    console.log("\n");
  }

};
