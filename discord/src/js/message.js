//Require
const connect = require('./connect')
const { writeFile } = require('fs')

//Constants
const client = connect.client

// Add a json list
let list = require("./message.json");
const { User } = require('discord.js');
const { stringify } = require('querystring');

// Message listener
client.on('messageCreate', msg => {
    if (msg.author.bot === true) { return }
    for (let x = 0; x < list.length; x++) {

        let listitems = list[x];
        if (msg.content == String(listitems[0])) {

            msg.reply(String(listitems[1]));
        }
    }
    if (msg.content == "data") {
        console.log(msg)
        msg.reply(stringify(msg))
    }
    if (msg.author.username == 'Silva') {
        msg.reply('shut up')
    }

}
);

const data = JSON.stringify({
    data: [1, 2]
})

/* writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}); */