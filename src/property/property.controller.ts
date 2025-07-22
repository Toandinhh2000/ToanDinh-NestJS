import { Controller } from '@nestjs/common';

@Controller('property')
export class PropertyController {}
@Get() 
findAll() {
  return ' All Properties';
}

@Post()
create() {
  return 'This will Create a Property';
} 