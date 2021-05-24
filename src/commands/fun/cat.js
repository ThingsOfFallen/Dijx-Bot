const { Client, Message, MessageAttachment } = require('discord.js');
const Zoro = require("zoro-api");
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let img = await Zoro.cat();
    let attachment = new MessageAttachment(img, "cat.png");
    message.channel.send(attachment);
};
module.exports.info = {
    name: 'cat',
    aliases: [""],
    category: 'fun'
};