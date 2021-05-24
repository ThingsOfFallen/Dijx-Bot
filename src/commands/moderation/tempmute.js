const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MUTE_MEMBERS')) return message.reply('You do not have permission!');
    var role = message.guild.roles.cache.get('823798952603418675');
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    if (member.roles.cache.has('823798952603418675')) return message.reply('Member is already muted!');
    var reason = message.content.split(" ").slice(3).join(' ');
    var moderator = message.author;
    var time = ms(args[1]);
    if (!user) return message.reply('You did not specify a user!');
    if (!member) return message.reply('Invalid user!');
    if (!reason) return message.reply('You did not specify a reason!');
    let embed = new MessageEmbed()
    .setTitle('You have been muted in DijxCloud!')
    .setColor('#ff811a')
    .setDescription(`**Reason:** ${reason}\n**Moderator:** ${moderator.tag}\n**Time:** ${ms(ms(args[1]), { long: true })}`)
    .setThumbnail(message.guild.iconURL())
    .setFooter('DijxCloud Moderation', client.user.avatarURL())
    .setTimestamp()
    if (!member.kickable) return message.reply('I cannot mute this user!');
    try {
        await user.send(embed);
    } catch (error) {
        {};
    }
    await member.roles.add(role)
    let logsembed = new MessageEmbed()
    .setTitle('Member Muted')
    .setColor('YELLOW')
    .setDescription(`**Member:** ${user.tag} (${user.id})\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}\n**Time:** ${ms(ms(args[1]), { long: true })}`)
    .setThumbnail(user.avatarURL())
    .setFooter('DijxCloud Logging', client.user.avatarURL())
    .setTimestamp()
    var channel = client.channels.cache.get('820608151224451082');
    channel.send(logsembed);
    message.channel.send(`${user.tag} has been temp-muted.`);
    setTimeout(() => {
        member.roles.remove(role)
    }, time);
}
module.exports.info = {
    name: 'tempmute',
    aliases: [""],
    category: 'moderation'
};