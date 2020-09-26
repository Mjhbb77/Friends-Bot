require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const Enmap = require("enmap");

client.config = {
  token: process.env.DISCORD_TOKEN,
  prefix: process.env.DISCORD_PREFIX,
  api: process.env.GOOGLE_API,
};
client.commands = new Enmap();
client.queue = new Map();

client.once("ready", () =>
  console.log("Ready, Logged in as " + client.user.tag)
