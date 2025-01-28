require('dotenv').config();  // Corrected line
const { Client, GatewayIntentBits } = require('discord.js');
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content === 'message/command') {
        message.channel.send('message read successfully');
    }
});

bot.login(process.env.DISCORD_TOKEN);