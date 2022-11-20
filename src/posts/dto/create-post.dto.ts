import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'The title of the post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The content of the post' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ description: 'The email of the author' })
  @IsEmail()
  @IsNotEmpty()
  authorEmail: string;
}
