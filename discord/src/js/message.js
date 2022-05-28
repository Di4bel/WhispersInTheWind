const { Client, Discord, Intents, Message } = require('discord.js');
const { parse } = require("dotenv");
const myIntents = new Intents(32767);
const client = new Client({ intents: myIntents });
let discordToken = process.env.DISCORD_TOKEN;
client.login(discordToken);

// Add a json list
let list = require("./message.json");

// Message listener
client.on('messageCreate', msg => {

    for (let x = 0; x < list.length; x++) {
        let listitems = list[x];
        if (msg.content == String(listitems[0])) {
            msg.reply(String(listitems[1]));
        }
    }
}
);

