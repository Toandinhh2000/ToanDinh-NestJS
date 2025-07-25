import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
import { Repository } from 'typeorm';

@Injectable()
exportclass UserService {
  constructor(private readonly userRepository: Repository<CreateAuthDto>) {}

  create(createUserDto: CreateAuthDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateAuthDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}