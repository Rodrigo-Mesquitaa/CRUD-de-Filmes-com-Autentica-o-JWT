import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(arg0: { username: string; password: string; }) {
    throw new Error('Method not implemented.');
  }
}
