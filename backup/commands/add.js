const { Client, Message, MessageEmbed } = require('discord.js');
const ticketSchema = require('../database/schemas/ticket');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    var user = message.author;
    var member = message.guild.member(user);
    var iduser = client.users.cache.get(args[0]);
    if (!iduser) return message.reply('Invalid user ID!');
    if (await ticketSchema.exists({ channelID: message.channel.id })) {
        await message.channel.overwritePermissions([
            {
                id: message.guild.roles.everyone,
                deny: ['VIEW_CHANNEL']
            },
            {
                id: '817915693516193822',
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
            },
            {
                id: user.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
            },
            {
                id: args[0],
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
            }
        ])
    };
    message.channel.send('Done!')
};

module.exports.info = {
    name: 'add',
    category: 'tickets'
};