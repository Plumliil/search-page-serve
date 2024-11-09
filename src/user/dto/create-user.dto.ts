// user.dto.ts
export class CreateUserDto {
  email: string;
  username: string;
  nickname?: string;
  phone?: string;
  birthday?: Date;
  createdAt?: Date;
}
