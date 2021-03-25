const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

var config = require('./config.js');

client.once('ready', () => {
    console.log('Alerta pinguim já ao corrente da situação');

    // const channel = client.channels.cache.get('824720217187942443');
    // channel.send("Também não estou a apanhar nada desta aula, zézocas.");

});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong');
    } else if (command === 'ultimovid') {
        message.channel.send('Está aí o último vídeo, pinguim.\n\n' + 'https://www.youtube.com/watch?v=YWGAxNsS1xU');
    }
});

/**
 * End of file
 */

console.log(config.discord.login_key);

client.login(config.discord.login_key);