import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('provides infomation about the user'),
    async execute(interaction: { reply: (arg0: string) => string; user: { username: string; joinedAt: number; }; }) {
        await interaction.reply(`thsi command was run by ${interaction.user.username} who joined on ${interaction.user.joinedAt}`);

    },
};