const chalk = require('chalk');
module.exports = async (client) => {
    await client.api.applications(client.user.id).guilds('793869104142090240').commands.post({
        data: {
            name: 'ping',
            description: 'Shows the bots ping.'
        },
        data: {
            name: 'help',
            description: 'Shows the help embed.'
        },
        data: {
            name: 'commands',
            description: 'Shows a list of the bots commands.'
        }
    });
    console.log(`${chalk.grey.bold('[')}${chalk.blue.bold('API')}${chalk.grey.bold(']')} ${chalk.white('All slash commands have been posted.')}`);
    client.ws.on('INTERACTION_CREATE', async (interaction) => {
        var command = interaction.data.name.toLowerCase();
        var args = interaction.data.options;

        var cmd = client.slash.get(command);
        if (!cmd) return;
        cmd.run(client, interaction, args);
    });
}