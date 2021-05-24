const { Client, MessageReaction } = require('discord.js');
/** 
* @param {Client} client 
* @param {MessageReaction} reaction 
*/
module.exports = async (reaction, user, client) => {
    var member = reaction.message.guild.member(user);
    switch (reaction.message.id) {
        case '833208430797389854':
            switch (reaction.emoji.name) {
                case '🔔':
                    member.roles.remove('817913992151957555');
                break;

                case '📌':
                    member.roles.remove('817914093515178014');
                break;

                case 'ℹ':
                    member.roles.remove('817914123249123388');
                break;

                case '🎉':
                    member.roles.remove('819716721271242793');
                break;

                case '🤝':
                    member.roles.remove('819716755022544936');
                break;

                case '🎁':
                    member.roles.remove('819716676760502302');
                break;

                case '💬':
                    member.roles.remove('817914224093167647');
                break;
            }
        break;
    }
}