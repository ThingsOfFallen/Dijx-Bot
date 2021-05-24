const chalk = require('chalk');
module.exports = async (client) => {
    console.log(`${chalk.grey.bold('[')}${chalk.cyanBright.bold('BOT')}${chalk.grey.bold(']')} ${chalk.white(`Logged into discord as: ${client.user.tag}`)}`);
    console.log(`${chalk.grey.bold('[')}${chalk.magentaBright.bold('STARTUP')}${chalk.grey.bold(']')} ${chalk.white('Backup startup completed successfully!')}`);
    statusshutdown();
    client.user.setPresence({
        activity: {
            name: 'DijxCloud Mainframe. Backup instance active.',
            type: 'LISTENING'
        },
        status: 'idle'
    });
    async function statusshutdown() {
        var members = client.channels.cache.get('819052742320062515');
        var servers = client.channels.cache.get('819053019794112513');
        var users = client.channels.cache.get('819052965687590912');
        members.setName(`🌍┃Members: N/A`);
        servers.setName(`🔐┃Servers: N/A`);
        users.setName(`🎭┃Users: N/A`);
    }
}