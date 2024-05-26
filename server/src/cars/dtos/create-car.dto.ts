import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  Length,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { CreateCarInsurenceDto } from 'src/carinsurance/dtos/create-carinsurence.dto';
import { CreateManufacturerDto } from 'src/manufacturer/dtos/create-manufacturer.dto';
import { Manufacturer } from 'src/manufacturer/entitites/manufacturer.entity';

export class CreateCarDto {
  @IsString()
  make: string;

  @IsString()
  @Length(2, 20)
  model: string;

  @IsString()
  manufacturer: string;

  @IsNumber()
  year: number;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateCarInsurenceDto)
  carInsurance: CreateCarInsurenceDto;
}
