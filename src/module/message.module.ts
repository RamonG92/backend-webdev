import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../model/message.model';
import { MessageController } from '../controller/message.controller';
import { MessageService } from '../service/message.service';

@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    controllers: [MessageController],
    providers: [MessageService],
  })
export class MessageModule {}