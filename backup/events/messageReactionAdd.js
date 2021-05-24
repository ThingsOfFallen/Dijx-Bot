const { Client, MessageReaction, MessageEmbed } = require('discord.js');
const ticketSchema = require('../database/schemas/ticket');
/** 
* @param {Client} client 
* @param {MessageReaction} reaction 
*/
module.exports = async (reaction, user, client) => {
    switch (reaction.message.id) {
        case '819730801246732308':
            if (reaction.emoji.name == '📩') {
                reaction.users.remove(user);
                var member = reaction.message.guild.member(user);
                if (await ticketSchema.exists({ userID: member.user.id })) return member.user.send('You already have a ticket!');
                var supportChannel = await reaction.message.guild.channels.create(`${member.user.username}-${member.user.discriminator}`, {
                    type: 'text',
                    parent: '817904346476970034',
                    permissionOverwrites: [
                        {
                            id: reaction.message.guild.roles.everyone,
                            deny: ['VIEW_CHANNEL']
                        },
                        {
                            id: '817915693516193822',
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
                        },
                        {
                            id: member.user.id,
                            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'USE_EXTERNAL_EMOJIS', 'ADD_REACTIONS', 'ATTACH_FILES', 'EMBED_LINKS']
                        }
                    ]
                });
                let supportEmbed = new MessageEmbed()
                .setColor('#13d0f1')
                .setTitle('New Ticket!')
                .setDescription(`Username: ${member.user.tag}\nID: ${member.user.id}\nJoined At: ${member.joinedAt.toDateString()}\nCreated At: ${member.user.createdAt.toDateString()}`)
                .setThumbnail(member.user.avatarURL())
                .setFooter('DijxCloud Tickets', client.user.avatarURL())
                .setTimestamp();
                await ticketSchema.create({ userID: member.user.id, channelID: supportChannel.id });
                member.user.send('Your ticket has been created!');
                await supportChannel.send(`<@!${member.user.id}>`).then(msg => msg.delete())
                await supportChannel.send(`<@&819045026558246953>, `, {embed: supportEmbed});
            }
    }
}