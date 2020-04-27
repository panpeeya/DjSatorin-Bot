const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require("./config.json");

client.on('message', message => {
    console.log(message + " was outputted.");
});
client.on('ready', () => {
    console.log("Satori was logged in");
});

client.login(process.env.BOT_TOKEN)