const axios = require('axios');

const { CHANNEL_NAME, CLIENT_ID } = process.env;

const getRandomInterval = () =>
  Math.floor(Math.random() * Math.floor(160)) * 1000;

let krabickaCount = 0;
let randomInterval = getRandomInterval();

const getKrabicka = async (client) => {
  const isOnline = await getIsOnline();
  if (!isOnline) {
    console.log('Patriiot je offline');
    krabickaCount = 0;
  } else {
    client.say(CHANNEL_NAME, '!krabicka');
    krabickaCount = +1;
    console.log(`Krabicka count: ${krabickaCount}`);
  }
};

const setSpammer = (client) =>
  setInterval(() => {
    getKrabicka(client);
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
  return data.data && data.data.length > 0;
};

exports.setSpammer = setSpammer;
exports.getKrabicka = getKrabicka;
exports.onConnectedHandler = onConnectedHandler;
