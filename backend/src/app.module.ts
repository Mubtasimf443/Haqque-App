import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [AuthModule, UserModule, BooksModule],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, BooksService],
})
export class AppModule {}
