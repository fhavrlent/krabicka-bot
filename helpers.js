const axios = require('axios');

const { CHANNEL_NAME, CLIENT_ID } = process.env;

const getRandomInterval = () =>
  Math.floor(Math.random() * Math.floor(160)) * 1000;

let boxCount = 0;
let randomInterval = getRandomInterval();

const getBox = async (client) => {
  const isOnline = await getIsOnline();
  if (!isOnline) {
    console.log('Patriiot je offline');
    boxCount = 0;
  } else {
    client.say(CHANNEL_NAME, '!krabicka');
    boxCount = +1;
    console.log(`Krabicka count: ${boxCount}`);
  }
};

const setBot = (client) =>
  setInterval(() => {
    getBox(client);
    randomInterval = getRandomInterval();
  }, 60 * 100 * 1000 + randomInterval);

const onConnectedHandler = (addr, port) =>
  console.log(`* Connected to ${addr}:${port}`);

const getIsOnline = async () => {
  const { data } = await axios.get(
    'https://api.twitch.tv/kraken/streams/36746721',
    {
      headers: {
        'Client-ID': CLIENT_ID,
        Accept: 'Accept: application/vnd.twitchtv.v5+json',
      },
    },
  );
  return data && data.stream && typeof data.stream === 'string';
};

exports.setBot = setBot;
exports.getBox = getBox;
exports.onConnectedHandler = onConnectedHandler;
