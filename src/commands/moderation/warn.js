const { Client, Message, MessageEmbed } = require('discord.js');
const warningSchema = require('../../database/schemas/warning');
/**
* @param {Client} client;
* @param {Message} message;
*/
const random = (min = 000001, max = 999999) => {
    let num = Math.random() * (max - min) + min;
    return Math.round(num);
};
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permission!');
    var moderator = message.author;
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    var reason = message.content.split(" ").slice(2).join(' ');
    var moderator = message.author;
    if (!user) return message.reply('You did not specify a user!');
    if (!member) return message.reply('Invalid user!');
    if (!reason) return message.reply('You did not specify a reason!');
    let embed = new MessageEmbed()
    .setTitle('You have been warned in DijxCloud!')
    .setColor('#ff811a')
    .setDescription(`**Reason:** ${reason}\n**Moderator:** ${moderator.tag}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter('DijxCloud Moderation', client.user.avatarURL())
    .setTimestamp()
    try {
        await user.send(embed);
    } catch (error) {
        {};
    }
    let warnID = random(100000, 999999);
    await warningSchema.create({ userID: user.id, moderatorID: moderator.id, reason: reason, warnID: warnID });
    let logsembed = new MessageEmbed()
    .setTitle('Member Warned')
    .setColor('YELLOW')
    .setDescription(`**Member:** ${user.tag} (${user.id})\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
    .setThumbnail(user.avatarURL())
    .setFooter('DijxCloud Logging', client.user.avatarURL())
    .setTimestamp()
    var channel = client.channels.cache.get('820608151224451082');
    channel.send(logsembed);
    message.channel.send(`${user.tag} has been warned.`);
};

module.exports.info = {
    name: 'warn',
    aliases: [""],
    category: 'moderation'
};