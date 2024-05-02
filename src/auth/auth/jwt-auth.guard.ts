import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    
    // Verifica se o usuário está autenticado
    if (!request.user) {
      throw new UnauthorizedException('Usuário não autenticado.');
    }

    // Verifica se há permissões necessárias para acessar o endpoint
    const requiredPermissions = this.reflector.get<string[]>('permissions', context.getHandler());
    if (requiredPermissions) {
      const user = request.user;
      const userPermissions = user.permissions; // Supondo que o usuário tenha uma propriedade 'permissions'
      const hasPermission = requiredPermissions.every(permission => userPermissions.includes(permission));
      if (!hasPermission) {
        throw new UnauthorizedException('Usuário não tem permissão para acessar este recurso.');
      }
    }

    // Verifica se o usuário está em um estado específico, se necessário
    // Se o usuário precisar estar em um estado específico para acessar o recurso, faça a verificação aqui

    return super.canActivate(context);
  }
}
