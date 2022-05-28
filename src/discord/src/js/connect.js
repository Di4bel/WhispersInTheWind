//Require
require('dotenv').config()

const { Client, Discord, Intents } = require('discord');

//Discord-Bot Intents via bitfield
const myIntents = new Intents(32767);

// Single Intents
/* myIntents.add(
Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
Intents.FLAGS.DIRECT_MESSAGE_TYPING,
Intents.FLAGS.GUILDS,
Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,

) */

// Please set these sensible Data in the root-directory .env file
let appID = process.env.APP_ID;
let publicKey = process.env.PUBLIC_KEY;
let discordToken = process.env.DISCORD_TOKEN;
let guildID = process.env.GUILD_ID;
let intent1 = process.env.INTENT1;


//Connecting to the Server
const client = new Client({ intents: myIntents });



client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag + '!');
});

client.login(discordToken);

require('./message');



