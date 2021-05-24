const chalk = require('chalk');
module.exports = async (client) => {
    client.once('ready', async () => require('../client/events/clientReady.js') (client));
    client.on('message', async (message) => require('../events/message') (client, message));
    client.on('messageReactionAdd', async (reaction, user) => require('../events/messageReactionAdd') (reaction, user, client));
    client.on('messageReactionRemove', async (reaction, user) => require('../events/messageReactionRemove') (reaction, user, client));
    client.on('guildMemberUpdate', async (oldMember, newMember) => require('../events/guildMemberUpdate') (oldMember, newMember, client));
    client.on('guildMemberAdd', async (member) => require('../events/guildMemberAdd') (member));
    process.on('unhandledRejection', async (error) => require('../extra/error') (client, error));
    console.log(`${chalk.grey.bold('[')}${chalk.green.bold('HANDLER')}${chalk.grey.bold(']')} ${chalk.white('All events have been loaded.')}`);
}