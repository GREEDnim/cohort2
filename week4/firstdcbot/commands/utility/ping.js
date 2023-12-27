const { SlashCommandBuilder } = require("discord.js");

const command=new SlashCommandBuilder();
command.setName('ping')
command.setDescription('replies with pong!')

async function execute(interaction){
    await interaction.reply('pong!')
}

module.exports={
    data:command,
    execute,
}