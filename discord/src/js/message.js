//Require
const connect = require('./connect')
const { writeFile } = require('fs')

//Constants
const client = connect.client

// Add a json list
let list = require("./commands.json")
const { stringify } = require('querystring')
let lastMessage

// Message listener
client.on('messageCreate', msg => {
    if (msg.author.bot === true) { return }
    if (msg.author.username == 'Silva') {
        msg.reply('shut up')
        return
    }
    for (let x = 0; x < list.length; x++) {

        let listitems = list[x];
        if (msg.content == String(listitems[0])) {

            msg.reply(String(listitems[1]))
        }
    }
    if (msg.content == "data") {
        console.log(msg)
        msg.reply(stringify(msg))
    }

    if (msg.content == "report") {
        report(lastMessage)
        msg.reply("Message-Data example has been writtten")
        msg.reply(`\`\`\`json\n${lastMessage} \`\`\``)
        return
    }
    lastMessage = JSON.stringify(msg)
}
)

function report(input) {
    writeFile('message.json', input, (err) => {
        if (err) throw err;
        console.log('The file has been saved!')
    })
}
