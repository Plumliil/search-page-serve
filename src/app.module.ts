import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteModule } from './website/website.module';
import { WebsiteController } from './website/website.controller';
import { WebsiteService } from './website/website.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://plumliil:a0123456@cluster0.0x9fm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
    WebsiteModule,
  ],
  controllers: [UserController, WebsiteController],
  providers: [UserService, WebsiteService],
})
export class AppModule {}
