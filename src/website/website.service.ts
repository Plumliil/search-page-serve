import { Injectable } from '@nestjs/common';
import { CreateWebsiteDto } from './dto/create-website.dto';
import { UpdateWebsiteDto } from './dto/update-website.dto';
import { Website } from './schema/website.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WebsiteService {
  constructor(
    @InjectModel('Website') private readonly websiteModel: Model<Website>,
  ) {}
  async create(createWebsiteDto: CreateWebsiteDto) {
    const createWebsite = new this.websiteModel(createWebsiteDto);
    return await createWebsite.save();
  }
  async getWebsiteById({
    userId,
    id,
  }: {
    userId: Types.ObjectId;
    id?: Types.ObjectId;
  }) {
    if (id) {
      return this.websiteModel.findOne({ userId, _id: id });
    } else {
      return this.websiteModel.find({ userId });
    }
  }

  findAll() {
    return `This action returns all website`;
  }

  findOne(id: number) {
    return `This action returns a #${id} website`;
  }
  /**
   * 根据用户ID查找网站信息。
   * @param uid 用户的唯一标识符。
   * @returns 返回找到的网站信息。
   */
  findOneByUid(uid: Types.ObjectId) {
    return this.websiteModel.findOne({ userId: uid });
  }
  update(id: number, updateWebsiteDto: UpdateWebsiteDto) {
    console.log('updateWebsiteDto', updateWebsiteDto);
    return `This action updates a #${id} website`;
  }

  remove(id: number) {
    return `This action removes a #${id} website`;
  }
}
