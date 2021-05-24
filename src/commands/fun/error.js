const { Client, Message, MessageAttachment } = require('discord.js');
const Zoro = require("zoro-api");
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ size: 512 }).replace(".webp", ".png");
    const msg = await message.channel.send("Generating ...");
    let img = await Zoro.error(avatar);
    let attachment = new MessageAttachment(img, "error.gif");
    message.channel.send(attachment) && msg.delete();
};

module.exports.info = {
    name: 'error',
    aliases: [""],
    category: 'fun'
};