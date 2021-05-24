const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('🏓 Pong!!!')
    .setColor('#13d0f1')
    .setDescription(`⏱ Bot Ping: ${Date.now() - message.createdTimestamp}ms\n💓 WebSocket Ping: ${client.ws.ping}ms`)
    .setFooter('DijxCloud Utility', client.user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.info = {
    name: 'ping'
};