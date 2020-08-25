require("dotenv").config();
const Discord = require("discord.js");
const { Client } = require("discord.js");
const client = new Discord.Client();
const prefix = "*";

client.on("ready", () => {
  console.log("loggedin");
});

var curse = [
  "people like you should come with a return window, ",
  "WULA comedians are funnier than you are, ",
  "your sex life is worse than the life of prisoners at tihar ",
  "your dad should have worn a condom, ",
  "your presence on this server is really hurting the avg IQ around, ",
  "I can bet your dad would trade you for a blow job, ",
  "If you were anymore boring, your name would be a course code, ",
  "Giving you a scholarship was the biggest mistake Shiv Nadar made, and he made Roshni, ",
  "I so wish your dad didn't cheap out on the condoms, "
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
      var rnd = Math.floor(Math.random() * 10 + 1);
      rnd = rnd - 1;
      message.channel.send(`${curse[rnd]} ${args}`);
    }
  }
});

client.login(process.env.BOT_TOKEN);
