import { Injectable } from '@nestjs/common';
import { Message } from '../model/message.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {

    private readonly messageRepository: Repository<Message>;
    constructor(
        @InjectRepository(Message)
        messageRepository: Repository<Message>) {
        this.messageRepository = messageRepository;
    }

    async findAll(): Promise<Message[]> {
        return await this.messageRepository.find();
    }

    async create(request: Message): Promise<Message> {
        return await this.messageRepository.save(request);
    }
    // async update(author: string, title: string, text: string): Promise<Message> {
    //     return await this.messageRepository.update();
    // }
}