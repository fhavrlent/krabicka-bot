import axios from 'axios';

import config from '../config';
import logger from '../logger';

export const getIsOnline = async () => {
  try {
    const { data } = await axios.get(
      'https://api.twitch.tv/kraken/streams/36746721',
      {
        headers: {
          Accept: 'Accept: application/vnd.twitchtv.v5+json',
          'Client-ID': config.clientId,
        },
      },
    );

    return data?.stream?.stream_type === 'live';
  } catch (error) {
    logger.error(error);
  }
};
