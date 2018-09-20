import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MessageModule } from 'module/message.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

  const options = new DocumentBuilder()
    .setTitle('Post example')
    .setDescription('The posts API description')
    .setVersion('1.0')
    .addTag('posts')
    .build();
  const document = SwaggerModule.createDocument(app, options, {include: [MessageModule]});
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();

// createConnection().then(async connection => {

//   const messageRepository = connection.getRepository(Message);
//   console.log('Creating a new message');
//   const message = new Message();
//   message.author = 'Ramon';
//   message.text = 'Ramon is de baas';
//   message.title = 'Bla';

//   await messageRepository.save(message);
//   await messageRepository.find();
// }).catch(error => console.log(error));