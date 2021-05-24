const { Client, Message } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
* @param {Array} args;
*/
module.exports.run = async (client, message, args) => {
    var admin = message.author;
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have permission!');
    await message.channel.send('Restarting...');
    await client.destroy();
    await client.login(process.env.token);
    await require('../../handler') (client);
    message.channel.send(`<@!${admin.id}>, Restart complete.`);
};

module.exports.info = {
    name: 'restart',
    aliases: [""],
    category: 'admin'
};