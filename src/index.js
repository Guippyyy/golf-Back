var http = require('http');
var app = require('../app');
var port = process.env.PORT || 3001;
app.set('port', port);

var server = http.createServer(app);

// Start listing to the port
server.listen(port, () => {
    console.log('listening on port ' + port)
})