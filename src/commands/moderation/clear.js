const { Client, Message } = require('discord.js');
var ms = require('ms');
const warningSchema = require('../../database/schemas/warning');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permission!');
    if (isNaN(args[0]) || parseInt(args[0]) > 100 || parseInt(args[0]) < 1) return message.reply('Please specify an amout between 1-100.');
    var messages = await message.channel.messages.fetch({ limit: parseInt(args[0]) });
    var usable = messages.filter(m => (m.createdTimestamp - Date.now()) < ms('14d') && !m.pinned);
    await message.channel.bulkDelete(usable);
    message.channel.send('Messages deleted.').then(msg => {
        msg.delete({timeout: 3000});
    });
}
module.exports.info = {
    name: 'clear',
    aliases: ["purge"],
    category: 'moderation'
};