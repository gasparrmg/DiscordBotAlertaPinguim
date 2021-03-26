const Request = require("request");

module.exports = {
    name: 'doggo',
    description: 'Mando-te um canito para te acalmares.',
    async execute(message) {
        const channel = message.channel;
        
        Request.get("https://dog.ceo/api/breeds/image/random", (error, response, body) => {
            if(error) {
                return console.dir(error);
            }

            var result = JSON.parse(body);

            if (result.message !== undefined && result.message !== null) {
                channel.send(result.message);
            }
        });
    }
}
