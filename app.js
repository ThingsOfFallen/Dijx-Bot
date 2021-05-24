const { textSync } = require('figlet');
const chalk = require('chalk');
var year = new Date().getFullYear();
console.log(chalk.cyanBright(textSync('DijxCloud  Bot', { horizontalLayout: 'fitted' })));
console.log(`${chalk.yellow.bold('#==============================')}${chalk.grey.bold('[')} ${chalk.cyanBright.bold('Dijx Bot')} ${chalk.grey.bold(']')}${chalk.yellow.bold('================================#')}`)
console.log(`${chalk.yellow.bold('#')}                   ${chalk.magenta.bold('Created by: Liam L <TheFallenSpirit>')}                   ${chalk.yellow.bold('#')}`);
console.log(`${chalk.yellow.bold('#')}                 ${chalk.red(`Copyright © 2020-${year}`)} ${chalk.cyanBright.bold('DijxCloud Platform')}                 ${chalk.yellow.bold('#')}`);
console.log(`${chalk.yellow.bold('#')}                              ${chalk.grey.bold('Starting bot..')}                              ${chalk.yellow.bold('#')}`);
console.log(chalk.yellow.bold('#==========================================================================#'));
require('./src/client/client');