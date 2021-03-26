module.exports = {
    name: 'calaaboca',
    description: 'O Ric cala a boca',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.channel.send('Tens de estar no canal para me conseguires calar, zézocas!');
        }

        await voiceChannel.leave();
        await message.channel.send('Até estava a curtir da companhia...');
    }
}