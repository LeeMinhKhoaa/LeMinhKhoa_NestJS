import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksControllerController } from './books-controller/books-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, BooksControllerController],
  providers: [AppService],
})
export class AppModule {}
