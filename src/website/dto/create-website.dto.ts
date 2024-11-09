import { Types } from 'mongoose';

// user.dto.ts
export class CreateWebsiteDto {
  userId: Types.ObjectId;
  url: string;
  icon: string;
  name: string;
}
