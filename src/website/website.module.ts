import { Module } from '@nestjs/common';
import { WebsiteService } from './website.service';
import { WebsiteController } from './website.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteSchema } from './schema/website.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Website', schema: WebsiteSchema }]),
  ],
  controllers: [WebsiteController],
  providers: [WebsiteService],
})
export class WebsiteModule {}
