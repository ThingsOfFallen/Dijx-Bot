const { readdirSync } = require('fs');
const chalk = require('chalk');
module.exports = async (client) => {
    readdirSync('./src/commands').forEach(dir => {
        const commandFiles = readdirSync(`./src/commands/${dir}`).filter(file => file.endsWith('.js'));
        for (let file of commandFiles) {
            let cmd = require(`../commands/${dir}/${file}`);
            if (cmd.info.name) {
                client.commands.set(cmd.info.name, cmd);
            };
            if (cmd.info.aliases) cmd.info.aliases.forEach(a => client.aliases.set(a, cmd.info.name));
        };
    });
    console.log(`${chalk.grey.bold('[')}${chalk.green.bold('HANDLER')}${chalk.grey.bold(']')} ${chalk.white('All commands have been loaded.')}`);
};