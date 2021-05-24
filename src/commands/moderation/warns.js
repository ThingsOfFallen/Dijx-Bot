const { Client, Message, MessageEmbed } = require('discord.js');
const warningSchema = require('../../database/schemas/warning');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permission!');
    var user = message.mentions.users.first() || message.author;
    if (!user) return message.reply('You did not specify a user!');
    var warns = await warningSchema.find({ userID: user.id });
    if (!warns.length) return message.channel.send(`${user.tag} Has no warnings.`);
    let warnembed = new MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${user.tag}'s Warnings:`)
    .setDescription(warns.map(warn => {return `ID: ${warn.warnID} | Moderator: ${client.users.cache.get(warn.moderatorID).tag} | Reason: ${warn.reason}`}).join('\n'))
    .setThumbnail(user.avatarURL())
    .setFooter('DijxCloud Moderation', client.user.avatarURL())
    .setTimestamp();
    message.channel.send(warnembed);
};

module.exports.info = {
    name: 'warns',
    aliases: [""],
    category: 'moderation'
};