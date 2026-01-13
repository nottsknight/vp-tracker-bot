import {Client} from 'discord.js';
import {config} from './config';

const client = new Client({
  intents: ['Guilds', 'GuildMessages', 'DirectMessages'],
});

client.once('clientReady', () => console.log('VP Tracker Bot is ready!'));

client.login(config.DISCORD_TOKEN).then(
  () => {},
  err => {
    console.log('Client failed to log in');
    console.log(err);
  },
);
