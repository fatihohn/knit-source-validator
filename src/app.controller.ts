// src/app.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ValidatorService } from './validator/validator.service';

@Controller()
export class AppController {
  constructor(private readonly validatorService: ValidatorService) {}

  @Post('add-job')
  async addJob(@Body() data: any) {
    await this.validatorService.addJob(data);
    return 'Job added to queue';
  }
}
