module.exports = (Discord, client, message) => {
    const prefix = '-';

    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    if (message.channel.id != 825372583981481994) {
        message.channel.send('Estás no canal errado para falar comigo, zézoca!');
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) {
        console.log("Executing " + message.content);
        command.execute(client, message, cmd, args, Discord);
    }
}