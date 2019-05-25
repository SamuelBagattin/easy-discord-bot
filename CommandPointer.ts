import * as commands from "./commands";
import {Message} from "discord.js";

export default class CommandPointer {

    public static readonly PREFIX = '!';

    public message: Message;

    private readonly _baseCommand: string;

    private readonly _args: Array<string>;

    private constructor(message: Message) {
        this.message = message;
        let command = message.content.substr(1);
        let splitted = command.split(' ');
        this._baseCommand = splitted.shift();
        this._args = splitted;
    }

    public static matchCommand(message: Message) {
        if (message.content[0] === this.PREFIX) {
            return new this(message);
        } else {
            return false
        }
    }

    public exec(): void {
        try {
            commands[this.baseCommand].execute(this.args, this.message);
        } catch (e) {
            this.message.reply(`"${this.baseCommand}" command doesn't exist`)
        }
    }

    get baseCommand(): string {
        return this._baseCommand;
    }

    get args(): Array<string> {
        return this._args;
    }
}