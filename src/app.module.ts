import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { RedisModule } from 'nestjs-redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/store'),
    // RedisModule.register({
    //   host: 'localhost',
    //   port: 6379,
    //   password: '123',
    // }),
    BookModule, UserModule, AuthModule, CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
