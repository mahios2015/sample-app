import request from 'supertest';
import app from '../src/server';
import { db } from '../common/databaseConnection';

jest.mock('../common/databaseConnection');

describe('User Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /user returns list of users', async () => {
    (db.query as jest.Mock).mockResolvedValueOnce({
      rows: [{ id: 1, name: 'John Doe' }],
    });

    const res = await request(app).get('/user');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
  });
});