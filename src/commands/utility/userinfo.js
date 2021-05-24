const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    var member = message.guild.member(user);
    let embed = new MessageEmbed()
    .setTitle('User Information')
    .setAuthor(user.tag, user.avatarURL())
    .setColor('#13d0f1')
    .addFields(
        {name: 'Joined At:', value: `${member.joinedAt.toUTCString()}`, inline: true},
        {name: 'Registered At:', value: `${user.createdAt.toUTCString()}`, inline: true},
        {name: 'Roles:', value: `${member.roles.cache.map(r => `${r}`).join(' ')}`},
        {name: 'ID:', value: `${user.id}`, inline: true},
        {name: 'Bot:', value: `${user.bot.toString().replace('false', 'No').replace('true', 'Yes')}`, inline: true},
        {name: 'Presence:', value: `**Status:** ${user.presence.status.replace('online', 'Online').replace('idle', 'Idle').replace('dnd', 'Do Not Disturb').replace('offline', 'Offline')}\n**Activities:** ${await user.presence.activities.toString().replaceAll(',', ', ')}`}
    )
    .setFooter('DijxCloud Utility', client.user.avatarURL())
    .setThumbnail(user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.info = {
    name: 'userinfo',
    aliases: ["ui"],
    category: 'utility'
};