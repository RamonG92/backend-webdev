import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Message {
        @PrimaryGeneratedColumn({
        name: 'postId',
    })
    id: number;
    @ApiModelProperty({
        example: 'Ramon',
        description: 'The name of the owner of the post.',
    })
    @Column({
        name: 'author',
        nullable: false,
    })
    author: string;

    @ApiModelProperty({
        example: 'Hoi',
        description: 'The title of the post.',
    })
    @Column({
        name: 'title',
        nullable: false,
        length: 100,
    })
    title: string;
    @ApiModelProperty({
        example: 'Ramon',
        description: 'The actual message of the post.',
    })
    @Column({
        name: 'message',
        nullable: false,
        length: 1000,
    })
    text: string;
}