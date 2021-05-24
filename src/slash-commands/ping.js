const { MessageEmbed } = require('discord.js');
const createAPIMessage = require('../extra/APIMessage');
module.exports.run = async (client, interaction, args) => {
    let embed = new MessageEmbed()
    .setTitle('🏓 Pong!!!')
    .setColor('#13d0f1')
    .setDescription(`💓 Ping: ${client.ws.ping}ms`)
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
    name: 'ping'
}