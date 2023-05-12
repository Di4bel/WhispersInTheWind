//Require
let discord = require('./discord.json');

const { Client, GatewayIntentBits } = require('discord.js');

//Discord-Bot Intents via bitfield


// Single Intents
/* myIntents.add(
Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
Intents.FLAGS.DIRECT_MESSAGE_TYPING,
Intents.FLAGS.GUILDS,
Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
) */

// Please set these sensible Data in a discord.json file in this directory
const appID = discord.APP_ID
const publicKey = discord.PUBLIC_KEY
const guildID = discord.GUILD_ID
const discordToken = discord.DISCORD_TOKEN

const myIntents = {
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
}


console.log(myIntents)
//Connecting to the Server
const client = new Client(myIntents);


client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag + '!');
});

client.login(discordToken);


//Exports
exports.appID = appID
exports.publicKey = publicKey
exports.guildID = guildID
exports.discordToken = discordToken
exports.client = client
exports.intents = myIntents