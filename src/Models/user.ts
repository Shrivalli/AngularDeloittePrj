export interface User {
  userId: number;
  username: string;
  password: string;
  email: string;
  role: 'admin' | 'user';
}