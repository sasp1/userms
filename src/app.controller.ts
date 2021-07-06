import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Ctx, MessagePattern, Payload, RedisContext} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {
    console.log(`Channel: ${context.getChannel()}`);
    console.log(data)
  }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
