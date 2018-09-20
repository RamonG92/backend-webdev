import { Module } from '@nestjs/common';
import { MessageModule } from './module/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageController } from 'controller/message.controller';
import { MessageService } from 'service/message.service';

@Module({
  imports: [TypeOrmModule.forRoot(), MessageModule],
  controllers: [MessageController],
  providers: [MessageService]
})
export class AppModule {

}
