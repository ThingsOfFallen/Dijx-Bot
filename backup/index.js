require('dotenv').config();
const config = require('../config.json');
const { Client, Collection } = require('discord.js');
const client = new Client();
const { textSync } = require('figlet');
const chalk = require('chalk');
var year = new Date().getFullYear();
console.log(chalk.cyanBright(textSync('DijxCloud  Bot', { horizontalLayout: 'fitted' })));
console.log(`${chalk.yellow.bold('#============================')}${chalk.grey.bold('[')} ${chalk.cyanBright.bold('Dijx Cloud Bot')} ${chalk.grey.bold(']')}${chalk.yellow.bold('============================#')}`)
console.log(`${chalk.yellow.bold('#')}                   ${chalk.magenta.bold('Created by: Liam L <TheFallenSpirit>')}                   ${chalk.yellow.bold('#')}`);
console.log(`${chalk.yellow.bold('#')}                 ${chalk.red(`Copyright © 2020-${year}`)} ${chalk.cyanBright.bold('DijxCloud Platform')}                 ${chalk.yellow.bold('#')}`);
console.log(`${chalk.yellow.bold('#')}                              ${chalk.grey.bold('Starting bot..')}                              ${chalk.yellow.bold('#')}`);
console.log(chalk.yellow.bold('#==========================================================================#'));
console.log(`${chalk.grey.bold('[')}${chalk.red.bold('ALERT')}${chalk.grey.bold(']')} ${chalk.white('You are running DijxCloud-Bot Backup!')}`);

client.commands = new Collection();
require('./database/connection') (client);
require('./handler') (client);

client.once('ready', async () => require('./events/ready') (client));
client.on('message', async (message) => require('./events/message') (client, message));
client.on('messageReactionAdd', async (reaction, user) => require('./events/messageReactionAdd') (reaction, user, client));
console.log(`${chalk.grey.bold('[')}${chalk.green.bold('HANDLER')}${chalk.grey.bold(']')} ${chalk.white('All events have been loaded.')}`);

client.login(config.client.token);