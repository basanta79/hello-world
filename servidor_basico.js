var http=require('http');

var server=http.createServer(function(request,response){
	response.writeHead(200,{'content-type':'text-plain'});
	response.end('<h1>hello world<h1>');
	
});

server.listen(1337,'127.0.0.1');
console.log('servidor arrancado en localhost:1337');

