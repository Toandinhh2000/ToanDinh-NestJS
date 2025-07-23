import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PropertyService {


  constructor(
    @InjectRepository(Property)
  ) 
  async findOne() {}
  async findAll() {}
  async create() {}
  async update() {}
  async delete() {}
   
  }