var Chatbot = require('./Chatbot');
var readline = require('readline');

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3000;

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(process.cwd() + '../index.html');
  });

io.on('connection', (socket) => {
	console.log('A user connected');
  
	// Handle incoming chat messages from clients
	socket.on('chat message', (msg) => {
	  console.log(`Message received: ${msg}`);
	  // Broadcast the message to all connected clients
	  io.emit('chat message', msg);
	});
  
	// Handle disconnection
	socket.on('disconnect', () => {
	  console.log('A user disconnected');
	});
  });

var r1 = readline.createInterface(process.stdin, process.stdout);
r1.setPrompt("You==>");
r1.prompt();
r1.on('line', function(message) {
    console.log('Bot ==> '+ reply(message));    
    //console.log('Bot ==>  '+ message);    
    
    r1.prompt();
}).on('close',function(){  //chaining events.
    process.exit(0);
});

function reply(message)
{
    this.Bot_Age = 25;
		this.Bot_Name = "name1";
		this.Bot_University = "VNSGU";
		this.Bot_Country = "India";
		
		message= message.toLowerCase()

		if(message.indexOf("hi") > -1 || 
			message.indexOf("hello") > -1 || 
			message.indexOf("welcome") > -1 )
		{
			return "Hi!";
		} 
		else if(message.indexOf("age") > -1 && 
			message.indexOf("your"))
		{
			return "I'm " + this.Bot_Age;
		}
		else if (message.indexOf("how") > -1 && 
			message.indexOf("are") && 
			message.indexOf("you"))
		{
			return "I'm fine ^_^"
		}
		else if(message.indexOf("where") > -1 
			&& message.indexOf("live") && 
			message.indexOf("you"))
		{
			return "I live in " + this.Bot_Country;
		}
		return "Sorry, I didn't get it :( ";

}

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
  });