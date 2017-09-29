const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const token = config.token;
var fs = require('fs');
var logFile = "./log/mods/log.txt"

//is the bot on?
console.log("ready for action captain!")

//listener
client.on('message', message => {
	//get message info
  	author = message.author.tag;
  	nick = message.author.username;
  	channel = message.channel.name;
  	var logFile = "./log/" + channel + "/log.txt";

  	if (channel){
  		fs.readFile(logFile,'utf8',function(err,data){
  			logging =data + "\r\n" + author + " " +  "'" + nick + "'" + "@ " + timestamp()
  			 +  ": " + message.content ;
 			fs.writeFileSync(logFile,logging);
  		});
  	}

});
	


// Log our bot in
client.login(token);
console.log(timestamp());

//gen timestamp
function timestamp() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth();
	var day = d.getDay();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();	
	time = (month + "/"+day + "/" + year + " " +hours + ":" + mins + ":" + secs);
	return time;
}

