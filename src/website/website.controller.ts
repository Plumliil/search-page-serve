import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WebsiteService } from './website.service';
import { CreateWebsiteDto } from './dto/create-website.dto';
import { UpdateWebsiteDto } from './dto/update-website.dto';
import { Types } from 'mongoose';

@Controller('website')
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}

  @Post()
  create(@Body() createWebsiteDto: CreateWebsiteDto) {
    return this.websiteService.create(createWebsiteDto);
  }

  @Get()
  getWebsiteById(
    @Query('uid') userId: Types.ObjectId,
    @Query('id') id?: Types.ObjectId,
  ) {
    return this.websiteService.getWebsiteById({
      userId,
      id,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.websiteService.findOne(+id);
  }
  @Get(':uid')
  findOneByUid(@Param('uid') uid: Types.ObjectId) {
    return this.websiteService.findOneByUid(uid);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebsiteDto: UpdateWebsiteDto) {
    return this.websiteService.update(+id, updateWebsiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.websiteService.remove(+id);
  }
}
