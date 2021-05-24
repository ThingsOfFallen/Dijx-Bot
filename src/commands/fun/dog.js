const { Client, Message, MessageAttachment } = require('discord.js');
const Zoro = require("zoro-api");
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let img = await Zoro.dog();
    let attachment = new MessageAttachment(img, "dog.png");
    message.channel.send(attachment);
};
module.exports.info = {
    name: 'dog',
    aliases: [""],
    category: 'fun'
};