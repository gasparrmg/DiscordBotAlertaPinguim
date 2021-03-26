
const ytdl = require('ytdl-core');

const ytSearch = require('yt-search');

module.exports = {
    name: 'welcomesong',
    description: 'Welcome song',
    async execute(voiceChannel) {

        await voiceChannel.join().then(connection => {
            const dispatcher = connection.play('./audio/welcome_song.mp3');

            dispatcher.on('finish', () => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}


        