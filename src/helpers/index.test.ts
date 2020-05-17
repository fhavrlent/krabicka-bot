import axios from 'axios';
import { mocked } from 'ts-jest/utils';

import { getIsOnline } from './';

afterEach(jest.clearAllMocks);
jest.mock('axios');
const mockedGet = mocked(axios.get);

describe('helpers', () => {
  describe('getIsOnline', () => {
    it('returns true', async () => {
      const resp = {
        data: {
          stream: {
            stream_type: 'live',
          },
        },
      };
      mockedGet.mockResolvedValue(resp);
      const isOnline = await getIsOnline();

      expect(isOnline).toEqual(true);
    });

    it('returns false, stream is hosting', async () => {
      const resp = {
        data: {
          stream: {
            stream_type: 'host',
          },
        },
      };
      mockedGet.mockResolvedValue(resp);
      const isOnline = await getIsOnline();

      expect(isOnline).toEqual(false);
    });

    it('returns false, stream is not live', async () => {
      const resp = {
        data: {},
      };
      mockedGet.mockResolvedValue(resp);
      const isOnline = await getIsOnline();

      expect(isOnline).toEqual(false);
    });
  });

  it('throws an error', async () => {
    mockedGet.mockImplementation(() => Promise.reject(new Error('Error')));

    expect(mockedGet).rejects.toThrow('Error');
  });
});
