import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignUpDto } from 'libs/common/dtos/auth/signUp.dto';
import { User, UserDocument } from '@app/database/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findByEmail(email: string): Promise<UserDocument | null> {
    const user = await this.userModel.findOne({ email });
    console.log(user);

    return user;
  }

  async createUser(signupDto: SignUpDto): Promise<User> {
    const newUser = new this.userModel({
      email: signupDto.email,
      username: signupDto.userName,
      password: signupDto.password,
      role: signupDto.role,
    });
    return newUser.save();
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id);
  }

  async findByRefresh(refresh: string) {
    return this.userModel.findOne({ refresh });
  }
}
