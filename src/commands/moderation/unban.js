const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You do not have permission!');
    var moderator = message.author;
    if (!args[0]) return message.reply('You did not specify a user!');
    try {
        var user = await message.guild.members.unban(args[0]);
        return message.channel.send(`${user.tag} has been un-banned.`);
    } catch (error) {
        message.reply('That user is not banned!');
    }
    let logsembed = new MessageEmbed()
    .setTitle('Member Un-Banned')
    .setColor('YELLOW')
    .setDescription(`**Member:** ${user.tag} (${user.id})\n**Moderator:** ${moderator.tag}`)
    .setThumbnail(user.avatarURL())
    .setFooter('DijxCloud Logging', client.user.avatarURL())
    .setTimestamp()
    var channel = client.channels.cache.get('820608151224451082');
    channel.send(logsembed);
    message.channel.send(`${user.tag} has been un-banned.`);
};

module.exports.info = {
    name: 'unban',
    aliases: [""],
    category: 'moderation'
};