import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = {
  userId: number;
  username: string;
  email: string;
  password: string;
  role: string;
  instituteId: number;
  instituteName: string;
};

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor() {
    this.initializeUsers();
  }

  private async initializeUsers() {
    const hashedPassword = await bcrypt.hash('changeme', 10);
    this.users = [
      {
        userId: 1,
        username: 'RJ',
        email: 'rj@gmail.com',
        password: hashedPassword,
        role: 'student',
        instituteId: 123,
        instituteName: 'XYZ Institute',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
