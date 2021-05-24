const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('DijxCloud Bot • Commands')
    .setColor('#13d0f1')
    .addFields(
        {name: 'Member:', value: '!help shows the help embed.\n!cmds or !commands shows this embed.\n!new creates a new ticket.\n!close will close a ticket.\n!status <node name> will show advanced status of a node.'},
        {name: 'Fun:', value: '!advice, !blur, !cat, !dog, !error, !jail, !joke, !meme, !roast, !trash, !triggered'},
        {name: 'Moderation:', value: '!kick, !ban, !tempmute, !mute, !tempban, !unban, !unmute, !clear, !lock, !unlock'},
        {name: 'Administration: ', value: '!role, !blacklist, !trigger, !restart, !stop, !lockdown'},
        {name: 'Owner', value: '!killall, !bot-lockdown'}
    )
    .setFooter('DijxCloud Utility', client.user.avatarURL())
    .setTimestamp();
    message.channel.send(embed);
};

module.exports.info = {
    name: 'commands',
    aliases: ["cmds"],
    category: 'utility'
};