import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { Response } from 'express';
import * as path from 'path';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('should send index.html file', async () => {
      const mockResponse = {
        sendFile: jest.fn(),
      } as unknown as Response;

     
      await appController.getHello(mockResponse);

      
      expect(mockResponse.sendFile).toHaveBeenCalledWith(
        path.join(__dirname, '..', 'index.html')
      );
    });
  });
});
