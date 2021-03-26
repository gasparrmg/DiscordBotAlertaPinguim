const dotenv = require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command)
}

// var config = require('./config.js');

client.once('ready', () => {
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

    if (command === 'ping') {
        message.channel.send('pong');
    } else if (command === 'deejay') {
        client.commands.get('play').execute(message, args);
    }
});

client.on('voiceStateUpdate', (oldState, newState) => {
    // check for bot
    if (!newState.member.user.bot && newState.channel != null && newState.connection != null) {
        client.commands.get('welcomesong').execute(newState.channel);
    }
});

/**
 * End of file
 */

client.login(process.env.DISCORD_TOKEN);