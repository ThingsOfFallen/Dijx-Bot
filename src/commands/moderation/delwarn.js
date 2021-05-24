const { Client, Message } = require('discord.js');
const warningSchema = require('../../database/schemas/warning');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not have permission!');
    var user = message.mentions.users.first() || message.author;
    if (!user) return message.reply('You did not specify a user!');
    if (!warningSchema.exists({ warnID: args[0] })) return message.reply('That warn does not exist!');
    await warningSchema.deleteOne({ warnID: args[0] });
    message.channel.send(`Warning with id: ${args[0]} was deleted.`);
};

module.exports.info = {
    name: 'delwarn',
    aliases: [""],
    category: 'moderation'
};