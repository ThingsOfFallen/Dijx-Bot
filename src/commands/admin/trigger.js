const { Client, Message, MessageEmbed } = require('discord.js');
/**
* @param {Client} client;
* @param {Message} message;
* @param {Array} args;
*/
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have permission!');
    if (!args.length) return message.reply('Invalid Trigger!');
    switch (args[0]) {
        case 'rules':
            let rulesembed = new MessageEmbed()
            .setTitle('DijxCloud Discord • Official Rules')
            .setColor('#13d0f1')
            .addFields(
                {name: '(1) There should be no hateful/racist/sexist/toxic/homophobic behavior:', value: 'This includes saying **ANYTHING** against another member to make them upset or hurt their feelings; Saying any racial slurs or racist terms to another member or saying them about anyone. No homophobic or related behavior. No sexist or related behavior.'},
                {name: '(2) There should be no NSFW or related content:', value: 'This includes any sort of NSFW content or anything of an NSFW nature; Any non-child-friendly content. You are allowed to swear... Refer to rule 1 for more info. Any violation of this rule will not be taken lightly!'},
                {name: '(3) There should be no chat flood or spam:', value: 'This includes saying 5+ messages at once; Saying the same phrase or text multiple times or sending 5+ messages when no one else is chatting.'},
                {name: '(4) There should be no threats of any kind:', value: 'This includes saying you will DOX/DDOS someone as a joke or being serious or any other type of threat whether you are joking or not. Any violation of this rule will not be taken lightly!'},
                {name: '(5) There should be no advertising of self-promotion:', value: 'This includes sending any type of Self-Promotion, Invite links, Social Media links, or advertisements of any kind.'},
                {name: '(6) There should be no drama of any kind:', value: 'This incudes any sort of issues/problems from another server or DMs. this will not be taken lightly, and will be punished. We want a toxic-free zone, drama should be taken to DMs.'},
                {name: '(7) Keep all chats in there respected channels:', value: 'This includes using commands or sending memes in general; Chatting in commands... etc.'},
                {name: '(8) There should be no personal information of any kind:', value: 'This includes asking for personal information, releasing personal information of yours or releasing personal information of others. Any violation of this rule will not be taken lightly!'},
                {name: '(9) There should be no impersonation of any kind:', value: 'This includes changing your username/nickname to any of the Staff Members or Owners.'},
                {name: 'The Discord TOS & Guidelines apply at all times!', value: 'Discord TOS: https://discord.com/terms\nDiscord Guidelines: https://discord.com/guidelines'}
            )
            .setThumbnail(message.guild.iconURL())
            .setFooter('DijxCloud Info', client.user.avatarURL())
            .setTimestamp()
            message.channel.send(rulesembed);
        break;

        case 'infoembed':
            let infoembed = new MessageEmbed()
            .setTitle('DijxCloud Platform • Information')
            .setColor('#13d0f1')
            .setDescription('**Welcome to DijxCloud!**\nMain Site: https://dijxcloud.com\nClient Area: https://portal.dijxcloud.com\nPanel: https://panel.dijxcloud.com\nStatus: https://status.dijxcloud.com\nDiscord: https://dijxcloud.com/discord / https://discord.dijx.cloud\nSupport: support@dijxcloud.com')
            .setThumbnail(message.guild.iconURL())
            .setFooter('DijxCloud Info', client.user.avatarURL())
            .setTimestamp()
            message.channel.send(infoembed);
        break;

        case 'ticketembed':
            let ticketembed = new MessageEmbed()
            .setTitle('DijxCloud • Support')
            .setColor('#13d0f1')
            .setDescription('Click the 📩 below to create a ticket.')
            .setFooter('DijxCloud Support', client.user.avatarURL())
            .setTimestamp()
            await message.channel.send(ticketembed).then(msg => msg.react('📩'));
        break;

        case 'rolesembed':
            let rolesembed = new MessageEmbed()
            .setTitle('DijxCloud • Roles')
            .setColor('#13d0f1')
            .setDescription('🔔: `Anoucements Squad`\n📌: `Node Squad`\nℹ: `Update Squad`\n🎉: `Events Squad`\n🤝: `Partners Squad`\n🎁: `Giveaway Squad`\n💬: `Chat Revive`')
            .setFooter('DijxCloud Utility', client.user.avatarURL())
            .setTimestamp()
            await message.channel.send(rolesembed).then(msg => {
                msg.react('🔔');
                msg.react('📌');
                msg.react('ℹ');
                msg.react('🎉');
                msg.react('🤝');
                msg.react('🎁');
                msg.react('💬');
            });
        break;

        case 'event':
            switch (args[1]) {
                case 'guildMemberAdd':
                    var emitmember = message.member || message.guild.member(message.mentions.users.first());
                    await client.emit('guildMemberAdd', emitmember);
                    message.channel.send('Completed.');
                break;
            };
        break;

        case 'statusembed':
            let statusembed = new MessageEmbed()
            .setColor('#13d0f1')
            .setTitle('Status • DijxCloud')
            .addFields(
                {name: 'Nodes:', value: 'PAR-01: N/A\nDUS-01: N/A'},
                {name: 'Sites:', value: 'Landing Page: N/A\nClient Panel: N/A'},
                {name: 'Databases:', value: 'DB-01: N/A'},
                {name: 'Servers:', value: 'Web Server: N/A\nReverse Proxy: N/A'}
            )
            .setFooter('DijxCloud Status', client.user.avatarURL())
            .setTimestamp()
            message.channel.send(statusembed);
        break;
    }
};

module.exports.info = {
    name: 'trigger',
    aliases: [""],
    category: 'admin'
};