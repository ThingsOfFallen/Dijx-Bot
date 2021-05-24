const { MessageEmbed } = require('discord.js');
const createAPIMessage = require('../extra/APIMessage');
module.exports.run = async (client, interaction, args) => {
    let embed = new MessageEmbed()
    .setTitle('DijxCloud Bot • Help')
    .setColor('#13d0f1')
    .setDescription(`For a list of commands do !cmds or !commands.\nFor support with hosting create a ticket in <#817905982176100464>`)
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
    name: 'help'
}