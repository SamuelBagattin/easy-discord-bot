import AbstractCommand from "../AbstractCommand";
import {Message} from "discord.js";
import * as superagent from "superagent";

export default class Weather extends AbstractCommand {

    static readonly ARGS_COUNT = 1;

    public static execute(args: Array<string>, message: Message): void {
        if (args.length === this.ARGS_COUNT) {
            const city = args[0];
            superagent.get('api.openweathermap.org/data/2.5/weather')
                .query({q: city, appid: process.env.OPENWEATHERMAP_TOKEN, units: 'metric'})
                .end((err, res) => {
                    if (err) {
                        message.reply(`Je ne trouve pas la ville "${city}"`)
                    } else {
                        message.reply(`il fait ${res.body.main.temp}° à ${city}`)
                    }
                });
        } else {
            Weather.sendArgsCountError(message)
        }

    }
}