require('dotenv').config();
const config = require('../../config.json');
const chalk = require('chalk');
const { Client, Collection, Intents, Structures } = require('discord.js');
Structures.extend('GuildMember', GuildMember => {
    class GuildMemberWithPending extends GuildMember {
        pending = false;
    
        constructor(client, data, guild) {
            super(client, data, guild);
            this.pending = data.pending ?? false;
        }
    
        _patch(data) {
            super._patch(data);
            this.pending = data.pending ?? false;
        }
    }
    return GuildMemberWithPending;
});
const client = new Client({
    messageSweepInterval: 180,
    messageCacheLifetime: 180,
    messageCacheMaxSize: 260,
    messageEditHistoryMaxSize: 260,
    fetchAllMembers: true,
    disableMentions: 'none',
    retryLimit: 6,
    ws: { intents: Intents.ALL },
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER']
});
console.log(`${chalk.grey.bold('[')}${chalk.red.bold('ALERT')}${chalk.grey.bold(']')} ${chalk.white('You are running Dijx Bot Full!')}`);

["aliases", "commands", "slash"].forEach(x => client[x] = new Collection());
["command", "slash", "event"].forEach(x => require(`../handlers/${x}`)(client));

console.log(`${chalk.grey.bold('[')}${chalk.redBright.bold('PROCESS')}${chalk.grey.bold(']')} ${chalk.white('Initiation Completed.')}`);

require('../database/connection')(client);

client.login(config.client.token);