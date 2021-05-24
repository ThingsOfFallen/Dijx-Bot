const mongoose = require('mongoose');
const config = require('../../config.json');
const chalk = require('chalk');
module.exports = async () => {
    var uri = `${config.database.type}://${config.database.username}:${config.database.password}@${config.database.cluster}.${config.database.host}/${config.database.name}?retryWrites=true&w=majority`;
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log(`${chalk.grey.bold('[')}${chalk.yellowBright.bold('DATABASE')}${chalk.grey.bold(']')} ${chalk.white('Successfully connected to the database.')}`));
}