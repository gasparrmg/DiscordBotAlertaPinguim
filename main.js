const dotenv = require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

/*const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command)
    commandsHelp[command.name] = command.description;
}*/

// var config = require('./config.js');

/*client.once('ready', () => {
    console.log('Alerta pinguim já ao corrente da situação');

    // const channel = client.channels.cache.get('824720217187942443');
    // channel.send("Também não estou a apanhar nada desta aula, zézocas.");

});

client.once('reconnecting', () => {
    console.log('Pinguim, estou a reconectar-me!');
});

client.once('disconnect', () => {
    console.log('Pinguim, estou-me a ir abaixo!');
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'deejay') {
        client.commands.get('deejay').execute(message, args);
    } else if (command === 'calaaboca') {
        client.commands.get('calaaboca').execute(message, args);
    } else if (command === 'ajuda') {
        client.commands.get('ajuda').execute(message, commandsHelp);
    } else if (command === 'boas') {
        client.commands.get('boas').execute(message.member.voice.channel);
    } else if (command === 'doggo') {
        client.commands.get('doggo').execute(message);
    }
});

client.on('voiceStateUpdate', (oldState, newState) => {
    if (!newState.member.user.bot && newState.channel !== null && oldState.channel === null) {
        client.commands.get('boas').execute(newState.channel);
    }
});*/

/**
 * End of file
 */

client.login(process.env.DISCORD_TOKEN);