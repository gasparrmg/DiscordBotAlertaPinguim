const ytdl = require('ytdl-core');

const ytSearch = require('yt-search');

module.exports = {
    name: 'deejay',
    description: 'O tio Ric canta-te uma musiquinha à tua escolha!',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.channel.send('Tens de estar num canal para me conseguires chamar, zézocas!');
        }

        const permissions = voiceChannel.permissionsFor(message.client.user);

        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return message.channel.send('Faltam permissões, zézocas!');
        }

        if (!args.length) {
            return message.channel.send('Tens de me dizer a música que queres que o Ric cante, né?');
        }

        const validURL = (str) => {
            var regex = /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
            if (!regex.test(str)) {
                return false;
            } else {
                return true
            }
        }

        if (validURL(args[0])) {

            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});

            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });

            await message.channel.send('Zézoca, toma aí o som desse link');

            return;
        }

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        };

        const video = await videoFinder(args.join(' '));

        if (video) {
            const stream = ytdl(video.url, {filter: 'audioonly'});

            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave();
            });

            await message.channel.send('Zézoca, toma aí a ' + video.title);
        } else {
            message.channel.send('Estás a gozar comigo, zézoca?');
        }
    }
}
