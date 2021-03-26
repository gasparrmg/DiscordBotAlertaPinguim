
const ytdl = require('ytdl-core');

const ytSearch = require('yt-search');

var welcomeSongs = [
    './audio/welcome_song.mp3',
    './audio/welcome_song2.mp3',
    './audio/welcome_song3.mp3'
];

module.exports = {
    name: 'welcomesong',
    description: 'Welcome song',
    async execute(voiceChannel) {

        await voiceChannel.join().then(connection => {
            const dispatcher = connection.play(welcomeSongs[Math.floor(Math.random() * welcomeSongs.length)]);

            dispatcher.on('finish', () => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}


        