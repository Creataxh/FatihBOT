const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} Hazır`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Kanka.');
  }
});

client.login('NDgzMDgwNTI0NTM4MTgzNjgw.DmOPqg.-0PfiD8y1ND98pjZkm0HjviU-6g');
