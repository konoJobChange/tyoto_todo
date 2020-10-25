import fetchMock from 'fetch-mock';
import { withAuthFetcher } from '../useTodos';

describe('test is useTodos', () => {
  it('check useTodos arguments', async () => {
    const user = {
      getIdToken: jest.fn().mockResolvedValue('文字列'),
    };
    const endPoint = 'https://kono.koki';

    fetchMock.get(endPoint, {
      status: 200,
      body: {
        name: 'kono koki',
      },
      headers: { Authorization: `Bearer ${user.getIdToken()}` },
    });

    await withAuthFetcher(endPoint, user);

    // fetchMockの設定をリセット
    fetchMock.restore();
  });
});
