const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('DijxCloud Bot • Help')
    .setColor('#13d0f1')
    .setDescription(`For a list of commands do !cmds or !commands.\nFor support with hosting create a ticket in <#817905982176100464>`)
    .setFooter('DijxCloud Utility', client.user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.info = {
    name: 'help'
};