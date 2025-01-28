const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const clientId = '1333595088663613550';
const guildId = '1019267629875220514';
const token = process.env.DISCORD_TOKEN;

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

        const response = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands:', response);

    } catch (error) {
        console.error('Error registering commands:', error);
    }
})();
