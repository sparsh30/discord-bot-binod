require("dotenv").config();

const { Client } = require("discord.js");
const client = new Client();
const prefix = "*";

client.on("ready", () => {
  console.log("loggedin");
});

var curse = [
  "Suck a cock, ",
  "fuck you, ",
  "your mom is a whore, ",
  "your dad should have worn a condom, "
];

client.on("message", message => {
  if (message.author.bot) return;
  //console.log(message.author.username);
  if (message.content.startsWith(prefix)) {
    const [cmdName, ...args] = message.content
      .trim()
      .substring(prefix.length)
      .split(/\s+/);
    if (cmdName == "curse") {
      var rnd = Math.floor(Math.random() * 4 + 1);
      rnd = rnd - 1;
      message.channel.send(`${curse[rnd]} ${args}`);
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
