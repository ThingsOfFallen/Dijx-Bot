const Canvas = require('canvas');
const path = require('path');
const { MessageAttachment } = require('discord.js');
module.exports = async (member) => {
    var channel = member.guild.channels.cache.find(channel => channel.id === '837133432852709406');
    const canvas = Canvas.createCanvas(700, 250)
    var ctx = canvas.getContext('2d');
    var background = await Canvas.loadImage(
        path.join('./src/assets/background.png')
    );
    let x = 0;
    let y = 0;
    ctx.drawImage(background, x, y);
    var pfp = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
    ctx.fillStyle = '#ffffff';
    ctx.font = '30px Sans';
    let text = `Welcome ${member.user.tag} to DijxCloud!`;;
    x = canvas.width / 2 - ctx.measureText(text).width / 2;
    ctx.fillText(text, x, 60 + pfp.height);
    ctx.font = '23px Sans';
    text = `Member #${member.guild.memberCount}`;
    x = canvas.width / 2 - ctx.measureText(text).width / 2;
    ctx.fillText(text, x, 94 + pfp.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(350, 83, 62, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    x = canvas.width / 2 - pfp.width / 2;
    y = 18;
    ctx.drawImage(pfp, x, y);
    const attatchment = new MessageAttachment(canvas.toBuffer(), 'welcome-card.png');
    channel.send(`${member},`, attatchment);
}