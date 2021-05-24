module.exports = async (oldMember, newMember, client) => {
    if (oldMember.pending && !newMember.pending) {
        const role = newMember.guild.roles.cache.get('793869104142090243');
        if (role) {
            await newMember.roles.add(role);
        };
    };
};