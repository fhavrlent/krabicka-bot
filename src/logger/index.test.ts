import { logFormat } from './';

describe('logger', () => {
  describe('logFormat', () => {
    it('returns log in correct format', () => {
      const result = (logFormat as any).template({
        level: 'info',
        message: 'Connected to irc-ws.chat.twitch.tv:443',
        timestamp: '2020-05-17T09:49:38.045Z',
      });
      console.log(result);
      expect(result).toEqual(
        '2020-05-17T09:49:38.045Z [info]: Connected to irc-ws.chat.twitch.tv:443',
      );
    });
  });
});
