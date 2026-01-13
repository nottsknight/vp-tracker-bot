import 'dotenv/config';

const {DISCORD_TOKEN, DISCORD_CLIENT_ID} = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
  throw new Error('Failed to read config');
}

export const config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
};
