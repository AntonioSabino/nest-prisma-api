import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './controllers/posts.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostsRepository } from './repositories/posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PrismaService, PostsRepository],
})
export class PostsModule {}
