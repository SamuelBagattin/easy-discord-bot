import AbstractCommand from "../AbstractCommand";
import {Message, Attachment} from "discord.js";
import * as superagent from "superagent";

export default class Nasa extends AbstractCommand {

    static readonly ARGS_COUNT = 0;

    public static execute(args: Array<string>, message: Message): void {
        if (args.length === this.ARGS_COUNT) {
            superagent.get('https://api.nasa.gov/planetary/apod')
                .query({api_key: process.env.NASA_TOKEN})
                .end((err, res) => {
                    if (err) {
                        message.reply("Erreur chez la NASA !!!!!")
                    } else {
                        const attachment = new Attachment(res.body.url);
                        // Send the attachment in the message channel
                        message.channel.send(`**${res.body.title}**\n*${res.body.date}*\n-------------------------\n${res.body.explanation}`, attachment);
                    }
                });
        } else {
            Nasa.sendArgsCountError(message)
        }

    }
}