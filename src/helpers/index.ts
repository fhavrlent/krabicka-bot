import axios from 'axios';

import logger from '../logger';
import config from '../config';

export const getIsOnline = async () => {
  try {
    const { data } = await axios.get(
      'https://api.twitch.tv/kraken/streams/36746721',
      {
        headers: {
          'Client-ID': config.clientId,
          Accept: 'Accept: application/vnd.twitchtv.v5+json',
        },
      },
    );
    return data?.stream?.stream_type === 'live';
  } catch (error) {
    logger.error(error);
  }
};
