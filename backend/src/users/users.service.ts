import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';


@Injectable()
export class UsersService {
    constructor(@InjectRepository (User) private userRepository: Repository<User>) {}

    async createUser(user: CreateUserDto) {
        const alreadyCreatedUser = await this.userRepository.findOne({ where: { username: user.username } });
        if (alreadyCreatedUser) {
            throw new HttpException('User exists', HttpStatus.CONFLICT)
        }
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    async getUsers() {
        const users = await this.userRepository.find();
        return users;
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new HttpException('User does not exist', HttpStatus.NOT_FOUND)
        }
        return user;
    }

    async updateUser(id: number, user: UpdateUserDto) {
        const alreadyCreatedUser = await this.userRepository.findOne({ where: { id } });
        if (!alreadyCreatedUser) {
            throw new HttpException('User does not exist', HttpStatus.NOT_FOUND)
        }

        const userToSave = Object.assign(alreadyCreatedUser, user)
        return this.userRepository.save(userToSave)
    }

    deleteUser(id: number) {
        return this.userRepository.delete(id);
    }
}
