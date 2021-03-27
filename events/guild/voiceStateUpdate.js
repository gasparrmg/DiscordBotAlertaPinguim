const ytdl = require('ytdl-core');

const ytSearch = require('yt-search');

var welcomeSongs = [
    './audio/welcome_song.mp3',
    './audio/welcome_song2.mp3',
    './audio/welcome_song3.mp3'
];

module.exports = async (Discord, client, oldState, newState) => {

    if (!newState.member.user.bot && newState.channel !== null && oldState.channel === null) {
        const voiceChannel = newState.channel;

        if (!voiceChannel) {
            return message.channel.send('Tens de estar num canal para me conseguires chamar, zézocas!');
        }

        await voiceChannel.join().then(connection => {
            const dispatcher = connection.play(welcomeSongs[Math.floor(Math.random() * welcomeSongs.length)]);

            dispatcher.on('finish', () => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}