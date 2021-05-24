const { Client, Message, MessageEmbed } = require('discord.js');
const ticketSchema = require('../../database/schemas/ticket');
/**
* @param {Client} client;
* @param {Message} message;
*/
module.exports.run = async (client, message, args) => {
    var user = message.author;
    var member = message.guild.member(user);
    if (await ticketSchema.exists({ userID: user.id })) return message.reply('You already have a ticket!');
    var supportChannel = await message.guild.channels.create(`${user.username}-${user.discriminator}`, {
        type: 'text',
        parent: '817904346476970034',
        permissionOverwrites: [
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
            }
        ]
    });
    let supportEmbed = new MessageEmbed()
    .setColor('#13d0f1')
    .setTitle('New Ticket!')
    .setDescription(`Username: ${user.tag}\nID: ${user.id}\nJoined At: ${member.joinedAt.toDateString()}\nCreated At: ${user.createdAt.toDateString()}`)
    .setThumbnail(user.avatarURL())
    .setFooter('DijxCloud Tickets', client.user.avatarURL())
    .setTimestamp();
    await ticketSchema.create({ userID: user.id, channelID: supportChannel.id });
    message.channel.send('Your ticket has been created!');
    await supportChannel.send(`<@!${user.id}>`).then(msg => msg.delete())
    await supportChannel.send(`<@&819045026558246953>, `, {embed: supportEmbed});
};

module.exports.info = {
    name: 'new',
    aliases: [""],
    category: 'tickets'
};