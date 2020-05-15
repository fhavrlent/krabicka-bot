const axios = require('axios');

const { CLIENT_ID } = process.env;

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
  return data && data.stream && data.stream.stream_type === 'live';
};

exports.onConnectedHandler = onConnectedHandler;
exports.getIsOnline = getIsOnline;
