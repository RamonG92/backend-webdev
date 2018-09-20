import {Controller, Get, Post, Body, Put } from '@nestjs/common';
import { MessageService } from '../service/message.service';
import { Message } from '../model/message.model';

@Controller('message')
export class MessageController {

    constructor(private readonly messageService: MessageService) {}

    @Get()
    async findAll(): Promise<Message[]> {
        return this.messageService.findAll();
    }

    @Post()
    async create(@Body() request : Message): Promise<Message> {
        console.log(request);
        
        return await this.messageService.create(request);
    }

    // @Put()
    // async update(@Body() request: Message): Promise<Message> {
    //     return await this.messageService.update(request.author, request.title, request.text);
    // }
}