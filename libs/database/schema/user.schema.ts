import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: ['USER', 'OPERATOR', 'AUDITOR', 'ADMIN'], default: 'USER' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
