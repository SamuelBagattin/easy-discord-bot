import {Client} from "discord.js";
import CommandPointer from "./CommandPointer";

require('custom-env').env();

const bot = new Client();

bot.on('ready', () => {
    bot.user.setActivity('COUCOU');
});

bot.on('message', message => {
    const userCommand = CommandPointer.matchCommand(message);
    userCommand ? userCommand.exec() : null ;

});

bot.login(process.env.BOT_TOKEN);