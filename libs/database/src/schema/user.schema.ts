import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from 'libs/common/types/roles.enum';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: Role, default: Role.USER })
  role: Role;

  @Prop()
  refresh: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
