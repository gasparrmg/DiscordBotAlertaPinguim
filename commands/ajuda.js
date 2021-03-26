const ytdl = require('ytdl-core');

const ytSearch = require('yt-search');

module.exports = {
    name: 'ajuda',
    description: 'O que acabaste de fazer, não é, amiguinho?',
    async execute(message, commandsHelp) {
        const channel = message.channel;
        
        var msg = 'Zézocas, estou a ver que estás um bocado entalado... Toma uma ajudinha:\n\n';

        Object.entries(commandsHelp).forEach(
            ([key, value]) => msg = msg + '-' + key + ' -> ' + value + '\n'
        );

        msg.trim();

        channel.send(msg);
    }
}
