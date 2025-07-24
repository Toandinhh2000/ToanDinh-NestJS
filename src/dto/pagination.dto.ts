import {IsNumber, IsOptional} from 'class-validator';

export class PaginationDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  skip: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  limit?: number;

}