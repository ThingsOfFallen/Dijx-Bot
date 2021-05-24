const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('You do not have permission!');
    var role = message.guild.roles.cache.get('823798952603418675');
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    if (!member.roles.cache.has('823798952603418675')) return message.reply('Member is not muted!');
    var moderator = message.author;
    if (!user) return message.reply('You did not specify a user!');
    if (!member) return message.reply('Invalid user!');
    let embed = new MessageEmbed()
    .setTitle('You have been un-muted in DijxCloud!')
    .setColor('#ff811a')
    .setDescription(`**Moderator:** ${moderator.tag}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter('DijxCloud Moderation', client.user.avatarURL())
    .setTimestamp()
    if (!member.kickable) return message.reply('I cannot unmute this user!');
    try {
        await user.send(embed);
    } catch (error) {
        {};
    }
    await member.roles.remove(role);
    let logsembed = new MessageEmbed()
    .setTitle('Member Un-Muted')
    .setColor('YELLOW')
    .setDescription(`**Member:** ${user.tag} (${user.id})\n**Moderator:** ${message.author.tag}`)
    .setThumbnail(user.avatarURL())
    .setFooter('DijxCloud Logging', client.user.avatarURL())
    .setTimestamp()
    var channel = client.channels.cache.get('820608151224451082');
    channel.send(logsembed);
    message.channel.send(`${user.tag} has been un-muted.`);
}
module.exports.info = {
    name: 'unmute',
    aliases: [""],
    category: 'moderation'
};