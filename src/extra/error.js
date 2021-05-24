const config = require('../../config.json');
const moment = require('moment')
const { MessageEmbed } = require('discord.js');
const { writeFileSync } = require('fs');
module.exports = async (client, error) => {
    var emoji = client.emojis.cache.get('824793115944419378');
    await writeFileSync(`./errors/${moment(Date.now()).format("DD-MM-YYYY_HH-mm-SS")}.txt`, `${error}`);
    let embed = new MessageEmbed()
        .setColor('#CD0000')
        .setTitle(`${emoji} Error Detected - Dijx Bot ${emoji}`)
        .addField('Error:', '```txt\n' + `${error}` + '```')
        .setFooter('DijxCloud Backend', client.user.avatarURL())
        .setTimestamp()
    config.backend.notify.forEach(async (id) => {
        var guild = client.guilds.cache.get('820508045736935454');
        var member = guild.members.cache.get(id);
        await member.send(embed);
    })
}