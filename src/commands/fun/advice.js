const { Client, Message, MessageEmbed } = require('discord.js');
const { Random } = require("something-random-on-discord")
const random = new Random();
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let data = await random.getAdvice();
    message.channel.send(data);
};

module.exports.info = {
    name: 'advice',
    aliases: [""],
    category: 'fun'
};