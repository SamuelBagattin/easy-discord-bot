import AbstractCommand from "../AbstractCommand";
import {Message} from "discord.js";
import * as superagent from "superagent";

export default class Numfact extends AbstractCommand {

    static readonly ARGS_COUNT = 1;

    public static execute(args: Array<string>, message: Message): void {
        if (args.length === this.ARGS_COUNT) {
            let number = args[0];
            superagent.get('http://numbersapi.com/' + number)
                .query({})
                .end((err, res) => {
                    if (err) {
                        message.reply("error")
                    } else {
                        message.reply(res.text)
                    }

                });
        } else {
            Numfact.sendArgsCountError(message)
        }

    }
}