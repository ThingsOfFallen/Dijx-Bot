const { Client, Message, MessageEmbed } = require('discord.js');
const Memer = require("random-jokes-api");
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let meme = Memer.meme()
    let embed = new MessageEmbed()
    .setTitle(meme.title)
    .setImage(meme.url)
    .setFooter(`Categroy: ${meme.category}`)
    message.channel.send(embed)
};

module.exports.info = {
    name: 'meme',
    aliases: [""],
    category: 'fun'
};