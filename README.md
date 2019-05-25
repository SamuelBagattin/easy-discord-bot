# Project Title

A multi-purpose discord bot easily upgradable with custom commands build with node.js and TypeScript

## Getting Started

### Prerequisites

Works with :
- Node 12.2
- Npm 6.9

### Installing

Create a .env file
```
touch .env
```
This file contains the API keys.
Add at least the `BOT_TOKEN` variable that contains the bot's secret key.

And then
```
npm install
npm start
```
A step by step series of examples that tell you how to get a development env running

### Adding a cusom command

You can add a custom command :

First, you need to create a class (extending the [AbstractCommand](AbstractCommand.ts) class) in the `commands` folder.
```typescript
export default class YourClass extends AbstractCommand
```

You can use the `ARGS_COUNT` constant that will take the number of arguments your command should take : 
```typescript
static readonly ARGS_COUNT = 0;
```

Then create a `execute` static function :
```typescript
public static execute(args: Array<string>, message: Message): void{
            if (args.length === this.ARGS_COUNT) {
                //your code here
            } else {
                YourClass.sendArgsCountError(message)
            }
}
```
The function will be called when the command will be executed.
- The first param is an array of strings that contains all the params the user gave.
- The second param is the Message object received from discord.js

You don't have to check the arguments count, but it's recommended.

Finally, add an export line to the [index.ts](commands/index.ts) file :
```typescript
export {default as YourCommand} from "./YourClass";
```
Your `command` is the command the user will give after the prefix.
You can change the prefix in [CommandPointer](CommandPointer.ts)



## Built With

* [Node 12.2](https://nodejs.org/)
* [npm 6.9](https://www.npmjs.com/) - Dependency Management
* [Intellij IDEA](https://www.jetbrains.com/idea/) - IDE


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
