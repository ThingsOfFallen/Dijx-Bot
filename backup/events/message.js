const { Client, Message } = require('discord.js');
/**
* @param {Client} client
* @param {Message} message 
*/
module.exports = async (client, message) => {
    try {
        var prefix = process.env.prefix;
        if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if (cmd.length == 0) return;
        const command = client.commands.get(cmd);
        if (!command) return
        command.run(client, message, args);
    } catch (error) {
        console.error(error);
    };
};