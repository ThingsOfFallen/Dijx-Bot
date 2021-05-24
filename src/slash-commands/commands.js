const { MessageEmbed } = require('discord.js');
const createAPIMessage = require('../extra/APIMessage');
module.exports.run = async (client, interaction, args) => {
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
    client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: await createAPIMessage(interaction, embed, client)
        }
    });
};

module.exports.info = {
    name: 'commands'
}