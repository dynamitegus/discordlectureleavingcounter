import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('provides information about the server.'),
    async execute(interaction: { reply: (arg0: string) => string; guild: {name: string; memberCount: number; }; }) {
        await interaction.reply(`this server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`)
    }
}