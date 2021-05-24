const { Client, MessageReaction, MessageEmbed } = require('discord.js');
const ticketSchema = require('../database/schemas/ticket');
/** 
* @param {Client} client 
* @param {MessageReaction} reaction 
*/
module.exports = async (reaction, user, client) => {
    var member = reaction.message.guild.member(user);
    switch (reaction.message.id) {
        case '833208780606275584':
            if (reaction.emoji.name == '📩') {
                try {
                    reaction.users.remove(user);
                    var member = reaction.message.guild.member(user);
                    if (await ticketSchema.exists({ userID: member.user.id })) return await member.user.send('You already have a ticket!').catch(error => {{}});
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
                await member.user.send('Your ticket has been created!').catch(error => {{}});
                await supportChannel.send(`<@!${member.user.id}>`).then(msg => msg.delete())
                await supportChannel.send(`<@&819045026558246953>, `, {embed: supportEmbed});
                } catch (error) {
                    {}
                }
            }
        break;

        case '833208430797389854':
            switch (reaction.emoji.name) {
                case '🔔':
                    member.roles.add('817913992151957555');
                break;

                case '📌':
                    member.roles.add('817914093515178014');
                break;

                case 'ℹ':
                    member.roles.add('817914123249123388');
                break;

                case '🎉':
                    member.roles.add('819716721271242793');
                break;

                case '🤝':
                    member.roles.add('819716755022544936');
                break;

                case '🎁':
                    member.roles.add('819716676760502302');
                break;

                case '💬':
                    member.roles.add('817914224093167647');
                break;
            }
        break;
    }
}