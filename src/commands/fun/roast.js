const { Client, Message } = require('discord.js');
const Memer = require("random-jokes-api");
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let jokes = Memer.roast();
    message.channel.send(jokes);
};

module.exports.info = {
    name: 'roast',
    aliases: [""],
    category: 'fun'
};