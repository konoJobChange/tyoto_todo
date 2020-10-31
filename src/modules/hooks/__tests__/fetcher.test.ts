import fetchMock from 'fetch-mock';
import { withAuthFetcher } from '../useTodos';
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

  it('test useHoge', () => {});
});
