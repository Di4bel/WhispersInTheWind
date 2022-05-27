require("discord.js");
const { Client, Discord, Intents } = require('discord.js');
const myIntents = new Intents(32767);
const client = new Client({ intents: myIntents });
let discordToken = process.env.DISCORD_TOKEN;
client.login(discordToken);

// Message listener
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
}
);

