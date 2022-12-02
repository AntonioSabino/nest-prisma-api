import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, PostsModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
