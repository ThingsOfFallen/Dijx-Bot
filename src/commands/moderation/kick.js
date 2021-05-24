const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not have permission!');
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    var reason = message.content.split(" ").slice(2).join(' ');
    var moderator = message.author;
    if (!user) return message.reply('You did not specify a user!');
    if (!member) return message.reply('Invalid user!');
    if (!reason) return message.reply('You did not specify a reason!');
    let embed = new MessageEmbed()
    .setTitle('You have been kicked from DijxCloud!')
    .setColor('#ff811a')
    .setDescription(`**Reason:** ${reason}\n**Moderator:** ${moderator.tag}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter('DijxCloud Moderation', client.user.avatarURL())
    .setTimestamp()
    if (!member.kickable) return message.reply('I cannot kick this user!');
    try {
        await user.send(embed);
    } catch (error) {
        {};
    }
    await member.kick(`Moderator: ${message.author.tag} Reason: ${reason}`);
    let logsembed = new MessageEmbed()
    .setTitle('Member Kicked')
    .setColor('YELLOW')
    .setDescription(`**Member:** ${user.tag} (${user.id})\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
    .setThumbnail(user.avatarURL())
    .setFooter('DijxCloud Logging', client.user.avatarURL())
    .setTimestamp()
    var channel = client.channels.cache.get('820608151224451082');
    channel.send(logsembed);
    message.channel.send(`${user.tag} has been kicked.`);
};

module.exports.info = {
    name: 'kick',
    aliases: [""],
    category: 'moderation'
};