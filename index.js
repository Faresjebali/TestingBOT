const Discord = require('discord.js');
const botconfig = require("./botconfig.json");
const client = new Discord.Client();
var blacklisted = ["discord.gg", "discord.gg/", "https://discord.gg"];

client.on('ready', () => {
  console.log(`Serving ${client.guilds.size} servers`);
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Hi');
  }
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
    channel.send(`Welcome to our Planet Sergent!, ${member}, Have Fun `);
  });
 
  client.on('message', message => {
    if(blacklisted.some(words => message.content.toLowerCase().includes(words))){
      if(message.member.hasPermission("MANAGE_GUILD")){
         return;
   } else {
           message.reply("No posting advertisement!");
              message.delete();
              then(msg => console.log(`Deleted message from ${msg.author.username}`))
          }
       }
  
  });
  
client.login(botconfig.token);