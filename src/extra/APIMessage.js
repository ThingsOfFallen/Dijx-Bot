const { APIMessage } = require('discord.js');
module.exports = async (interaction, content, client) => {
    let apiMessage = await APIMessage.create(client.channels.resolve(interaction.channel_id), content)
    .resolveData()
    .resolveFiles();
    return { ...apiMessage.data, files: apiMessage.files };
}
