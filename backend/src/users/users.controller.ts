import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Res } from '@nestjs/common';
import { BadRequestException, HttpException } from '@nestjs/common/exceptions';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post()
    async createUser(@Res() response, @Body() user: CreateUserDto) {
        try {
            const createdUser = await this.userService.createUser(user);
            return response.status(HttpStatus.CREATED).send(createdUser);
        }
        catch (e: any) {
            throw e;
        }
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    async getUserById(@Res() response, @Param('id', ParseIntPipe) id: number) {
        try {
            const queriedUser = await this.userService.getUserById(id);
            return response.status(HttpStatus.OK).send(queriedUser);
        }
        catch (e: any) {
            throw e;
        }
    }

    @Patch(':id')
    async updateUser(@Res() response, @Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
        try {
            const updatedUser = await this.userService.updateUser(id, user);
            return response.status(HttpStatus.OK).send(updatedUser);
        }
        catch (e: any) {
            throw e;
        }
    }

    @Delete(':id')
    async deleteUser(@Res() response, @Param('id', ParseIntPipe) id: number) {
        try {
            const deleted = await this.userService.deleteUser(id);
            return response.status(HttpStatus.OK).send(deleted);
        }
        catch (e: any) {
            throw e;
        }
    }
}
