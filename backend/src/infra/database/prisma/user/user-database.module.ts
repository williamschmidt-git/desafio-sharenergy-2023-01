import { Module } from '@nestjs/common';
import { UserRepository } from 'src/app/repositories/user-repository';
import { PrismaService } from '../prisma.service';
import { PrismaUserRepository } from './repositories/prisma-user-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class UserDatabaseModule {}
