const ytdl = require('ytdl-core');

const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
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
            return message.channel.send('Tens de me dizer a música que queres que o Ric toque, né?');
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
