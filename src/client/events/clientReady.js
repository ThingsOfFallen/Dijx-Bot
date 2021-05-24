const { Client, Message, MessageEmbed } = require('discord.js');
const axios = require('axios');
const chalk = require('chalk');
const config = require('../../../config.json');
/**
* @param {Client} client;
* @param {Message} message;
* @param {Array} args;
*/
module.exports = async (client) => {
    require('../SlashAPI') (client);
    console.log(`${chalk.grey.bold('[')}${chalk.cyanBright.bold('BOT')}${chalk.grey.bold(']')} ${chalk.white(`Logged into discord as: ${client.user.tag}`)}`);
    console.log(`${chalk.grey.bold('[')}${chalk.magentaBright.bold('STARTUP')}${chalk.grey.bold(']')} ${chalk.white('Startup completed successfully!')}`);
    var guild = client.guilds.cache.get('793869104142090240');
    var counts = [false, false, false];
    var status = [false, false, false, false, false, false, false];

    setInterval(() => {
        client.user.setPresence({
            activity: {
                name: 'over DijxCloud! • dijxcloud.com',
                type: 'WATCHING'
            },
            status: 'online'
        });
    }, 120000);

    setInterval(async () => {
        await getcounts();
        await setstatus();
    }, 60000);

    async function getcounts() {
        await axios({
            method: 'GET',
            url: `${config.panel.url}/api/application/servers`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.panel.token}`
            }
        }).then(responce => {
            counts[0] = guild.memberCount;
            counts[1] = responce.data.meta.pagination.total;
        }).catch(err => {{}});

        await axios({
            method: 'GET',
            url: `${config.panel.url}/api/application/users`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.panel.token}`
            }
        }).then(responce => {
            counts[2] = responce.data.meta.pagination.total;
        }).catch(err => {{}});
    };

    async function setstatus() {
        var members = client.channels.cache.get('819052742320062515');
        var servers = client.channels.cache.get('819053019794112513');
        var users = client.channels.cache.get('819052965687590912');
        members.setName(`🌍┃Members: ${counts[0]}`);
        servers.setName(`🔐┃Servers: ${counts[1]}`);
        users.setName(`🎭┃Users: ${counts[2]}`);
    }
};