import { Test, TestingModule } from '@nestjs/testing';
import { BooksControllerController } from './books-controller.controller';

describe('BooksControllerController', () => {
  let controller: BooksControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksControllerController],
    }).compile();

    controller = module.get<BooksControllerController>(BooksControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
