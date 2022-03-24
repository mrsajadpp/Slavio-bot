const discord = require('discord.js')
const client = new discord.Client()
const fetch = require('node-fetch')

client.on('ready', () => {
  console.log("I'm onoine"); 
});
client.on('message', async message => {
  if (message.content === 'Hello') {
    message.channel.send('${mention} Hello how are you?')
  }
  if (message.content === '>help') {
    let embed = new Discord.MessageEmbed()
    .setTitle('🌀Commands for slavio!')
    .setDescription('>help:For see all commands. >admins:For see admins. >rules:For see all rules.')
    .setFooter('This bot Developed by Crazy cln(Sajad pp)')
    .setColor('RANDOM')
  }
  if (message.content === '>admins') {
    let embed = new Discord.MessageEmbed()
    .setTitle('🍂Slavio admins!')
    .setDescription('<#appu>. <#noveax>. <#akku>.')
    .setFooter('Admins by Crazy cln(Sajad pp)')
    .setColor('RANDOM')
  }
  //Conversation start
  if (message.content === 'Fine') {
    message.channel.send("${mention} 🥳Nice.")
  }
  if (message.content === "I'm fine") {
    message.channel.send("${mention}🥳Nice")
  }
  if (message.content === 'What is my name?') {
    message.channel.send("Your name is ${mention}")
  }
  if (message.content === 'What is your name?') {
    message.channel.send("${mention} 🗨️My name is slavio.")
  }
  if (message.content === 'your family') {
    message.channel.send("${mention} My developer sajad(Crazy cln)")
  }
  if (message.content === 'YouTube') {
    message.channel.send("${mention} My developer is a youtuber.")
  }
  if (message.content === 'Minecrafr') {
    message.channel.send("${mention} Minecraft is my favourite game.")
  }
  if (message.content === 'Smile please') {
    message.channel.send("${mention} 😊.")
  }
  if (message.content === 'Shavarma') {
    message.channel.send("${mention} Shavarma is my favourite food.")
  }
  if (message.content === 'Thank you') {
    message.channel.send("${mention} 🍂Welcome .")
  }
  if (message.content === 'Sing a song') {
    message.channel.send("${mention} Johnny Johnny yes pappa eating shugar no pappa telling eyes open your mouth hahaha...! More music joine ar listen send a music request at music request.")
  }
  if (message.content === "I'll married you") {
    message.channel.send("${mention} No I'm a bot and your friend.")
  }
  if (message.content === 'Where is your home?') {
    message.channel.send("${mention} 😁My home in world.")
  }
  if (message.content === 'Tell me a joke') {
    message.channel.send("${mention} 😂I'm not a joker.")
  }
  //Conversation end
  
  if (message.content === 'Hack') {
    let embed = new Discord.MessageEmbed()
    .setTitle('🧨You breaked slavio rules!')
    .setDescription('${mention} 💥You breaked slavio rules. checkout >rules in rule no:9. 📣Tell a reason or you will ban 24 hours!')
    .setFooter('Admins by Crazy cln(Sajad pp)')
    .setColor('#FF0000')
  }
  if (message.content === '>rules') {
    let embed = new Discord.MessageEmbed()
    .setTitle("🧨 RULES FOR SLAVIO!")
    .setDescription("1:No Racism/Abuse/Profanity/NSFW content allowed. 2:Treat Each Other Humbly. 3:Fake Identity is strictly Prohibited in this server. 4:No Harsh suicidal jokes, Political Comments , Toxic Comments, Excessive Personal attack, Any type of serious harassment [Blackmailing, Hate speech, DM spamming members] will result in a permanent Ban. 5:Don’t Expose Your private and personal information like Address, full name, Documents, Contact Number, Your Picture, Social Media Accounts to Anyone (Your Safety is in Your Hand, we are not responsible for any kind of Act. 6:Don’t get involved or made such Trash/controversial Comments for other Youtuber's/Streamer's/servers. 7:Use Every Channel for Their Purpose they Made For. Don't Do Any Extra Activity . 8:Don't beg for a role. 9:Do not threaten anyone to hack , or harm someone. 10:Do not impersonate staff /mod/leader - This is something we take seriously, regardless if its a joke or not.")
    .setTitle("🧨 TEXT CHANNEL RULES!")
    .setDescription("11:Don’t Spam (Emoji , same msg again & again or Don't spam for Level Increase). 12:If any of staff  member is asking to Change the Topic of conversation then it  needs to be changed, if it gets too offensive to other members. If not followed, there are kick/ban. 13:We highly request to our old members to welcome new members & try including them in your conversation. Don’t act creepy or rude towards the new members because they don't know how to behave in server. 14:Respect all staff and follow their instruction , Don't Use Abusive/odd Names/ Profile Pictures.  if Any mod Found You Guilty they Can Change Your Name Any time.")
    .setFooter("Rules by Crazy cln(Sajad pp)")
    .setColor("RANDOM")
  }
});
Presence: {
    status: "online"; // You can show online, idle, and dnd
    name: ">help"; // The message shown
    type: "WATCHING"; // PLAYING, WATCHING, LISTENING, STREAMING
  };

client.login('Toke here')