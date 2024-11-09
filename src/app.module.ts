import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteModule } from './website/website.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb+srv://plumliil:a0123456@cluster0.0x9fm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      'mongodb+srv://plumliil:a0123456@cluster0.kp5hp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
    WebsiteModule,
  ],
})
export class AppModule {}
