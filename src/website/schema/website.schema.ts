// src/schemas/website.schema.ts
import { Schema, Document, Types } from 'mongoose';

export interface Website extends Document {
  userId: Types.ObjectId;
  url: string;
  icon: string;
  name: string;
}

export const WebsiteSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true, // 用于关联用户
  },
  url: {
    type: String,
    required: true,
    unique: true,
    match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i, // 确保为有效的 URL 格式
  },
  icon: {
    type: String,
    required: false, // 图标可以是可选的
    match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i, // 确保为有效的 URL 格式
  },
  name: {
    type: String,
    required: true,
  },
});
