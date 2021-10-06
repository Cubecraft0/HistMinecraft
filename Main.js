const Discord = require("discord.js");
const Client = new Discord.Client({ intents: [] });

Client.on("ready", () => {
  console.log("ready");
});

Client.login();
