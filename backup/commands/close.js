const { Client, Message } = require('discord.js');
const ticketSchema = require('../database/schemas/ticket');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    var user = message.author;
    var member = message.guild.member(user);
    if (await ticketSchema.exists({ channelID: message.channel.id })) {
        message.channel.send('Are you sure you want to close this ticket?').then(msg => {
            msg.react('✅');
            msg.react('❌');
            msg.awaitReactions(async (reaction, user) => user.id === message.author.id && (reaction.emoji.name == '✅' || reaction.emoji.name == '❌'),
            {max: 1, time: 30000}).then(async (collected) => {
                if (collected.first().emoji.name == '✅') {
                    await ticketSchema.deleteOne({ userID: user.id, channelID: message.channel.id });
                    message.channel.delete();
                } else return message.channel.send('Cancelled!');
            });
        });
    } else return message.reply('This is not a ticket!');
};

module.exports.info = {
    name: 'close'
};