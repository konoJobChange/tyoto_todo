import fetchMock from 'fetch-mock';
import { useHoge, withAuthFetcher } from '../useTodos';

import { renderHook } from '@testing-library/react-hooks';
import { cache } from 'swr';

describe('test useTodos fetcher', () => {
  it('check useTodos arguments', async () => {
    const string = 'konokoki';
    const user = {
      getIdToken: jest.fn().mockResolvedValue(string),
    };
    const endPoint = 'https://kono.koki';

    fetchMock.get(endPoint, {
      status: 200,
      body: {
        name: 'kono koki',
      },
      headers: { Authorization: `Bearer ${string}` },
    });

    await withAuthFetcher(endPoint, user);
    expect(user.getIdToken).toBeCalledTimes(1);

    // fetchMockの設定をリセット
    fetchMock.restore();
  });
});

describe('test is useTodos swr', () => {
  afterEach(() => cache.clear());

  const fn = jest.fn();

  it('test useHoge', () => {
    const withAuthFetcher = fn;
    const useSWR = jest.fn();
    const user = {
      uid: 'string',
    };
    const process = {
      env: {
        API_SERVICE_URL: 'https://kono.koki',
      },
    };

    const key = `${process.env.API_SERVICE_URL}/users/${user.uid}/todos`;

    const { result } = renderHook(() => useHoge(user));
  });
});
