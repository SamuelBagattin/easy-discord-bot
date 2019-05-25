import {Message} from "discord.js";

export default abstract class AbstractCommand {
    static readonly ARGS_COUNT: number;

    static sendArgsCountError(message: Message) {
        message.reply(`La commande prend ${this.ARGS_COUNT} argument(s)`)
    }
}
