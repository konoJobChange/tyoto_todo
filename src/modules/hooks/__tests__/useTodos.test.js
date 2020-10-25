import fetchMock from 'fetch-mock';
import { withAuthFetcher } from '../useTodos';

describe('test is useTodos', () => {
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
