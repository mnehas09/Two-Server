var http = require ('http');
var PORT1 = 7000;
var PORT2 = 7500;


var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

function handleRequest1(request, response)

{
	//reponse is ending
	response.end("it works!! path hit" + request.url);
}

server1.listen(PORT1, function()
{
	console.log("You smell nice!")
})

function handleRequest2(request, response)

{
	//reponse is ending
	response.end("it works!! path hit" + request.url);
}


server2.listen(PORT2, function()
{
	console.log("Your teeth are yellow!")
})

