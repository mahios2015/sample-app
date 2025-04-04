// modules/user/user.controller.ts
import { Request, Response } from 'express';
import { db } from '../../common/databaseConnection';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM users', []);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};