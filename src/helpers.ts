import axios from 'axios';

import logger from './logger';

const { CLIENT_ID } = process.env;

export const onConnectedHandler = (addr, port) =>
  console.log(`* Connected to ${addr}:${port}`);

export const getIsOnline = async () => {
  try {
    const { data } = await axios.get(
      'https://api.twitch.tv/kraken/streams/36746721',
      {
        headers: {
          'Client-ID': CLIENT_ID,
          Accept: 'Accept: application/vnd.twitchtv.v5+json',
        },
      },
    );
    return data?.stream?.stream_type === 'live';
  } catch (error) {
    logger.error(error);
  }
};
