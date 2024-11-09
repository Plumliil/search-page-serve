// src/user/schemas/user.schema.ts
import { Schema, Document } from 'mongoose';

export interface User extends Document {
  email: string;
  username: string;
  nickname?: string;
  phone?: string;
  birthday?: Date;
  createdAt: Date;
}

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  username: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    match: /^[0-9]{10,15}$/, // 假设电话号码为10到15位数字
  },
  birthday: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
