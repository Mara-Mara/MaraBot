const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const clientId = '1333595088663613550'; // Replace with your bot's client ID
const token = process.env.DISCORD_TOKEN; // Your bot's token

const commands = [
    new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Gets the avatar of a provided user.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to get the avatar of')
                .setRequired(true))
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
