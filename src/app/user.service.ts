import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { userId: 1, username: 'admin', password: 'admin123', email: 'admin@example.com', role: 'admin' },
    { userId: 2, username: 'user1', password: 'pass123', email: 'user1@example.com', role: 'user' },
    { userId: 3, username: 'user2', password: 'pass456', email: 'user2@example.com', role: 'user' }
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserByCredentials(username: string, password: string): User | undefined {
    return this.users.find(user => user.username === username && user.password === password);
  }

  addUser(user: User): boolean {
    if (this.users.find(u => u.username === user.username)) {
      return false; // Username already exists
    }
    user.userId = this.users.length + 1;
    user.role = 'user'; // Default role for new users
    this.users.push(user);
    return true;
  }
}