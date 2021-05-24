const { Client, Message } = require('discord.js');
const warningSchema = require('../../database/schemas/warning');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You do not have permission!');
    var user = message.mentions.users.first() || message.author;
    if (!user) return message.reply('You did not specify a user!');
    var warns = await warningSchema.find({ userID: user.id });
    if (!warns.length) return message.reply(`${user.tag} Has no warnings.`);
    await warningSchema.deleteMany({ userID: user.id });
    message.channel.send(`${user.tag}'s Warnings were cleared.`);
};

module.exports.info = {
    name: 'clearwarns',
    aliases: [""],
    category: 'moderation'
};