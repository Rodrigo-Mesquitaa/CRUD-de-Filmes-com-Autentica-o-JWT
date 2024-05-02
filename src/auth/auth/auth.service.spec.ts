import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import * as jwt from 'jsonwebtoken';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a JWT token', async () => {
    const username = 'testuser';
    const password = 'testpassword';
    try {
      const token = await service.login({ username, password });
      expect(token).toBeDefined();
      
      // Verifica se o token é um token JWT válido
      const decodedToken = jwt.decode(token);
      expect(decodedToken).toBeDefined();
      expect(decodedToken).toHaveProperty('username', username);
    } catch (error) {
      // Se ocorrer um erro, falha no teste
      fail(error);
    }
  });
});
