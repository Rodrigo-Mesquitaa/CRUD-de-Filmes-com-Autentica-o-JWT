import { IsString, IsOptional, IsInt, Min, IsArray } from 'class-validator';

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  title?: string;

  // Other fields are optional for update
  @IsOptional()
  @IsString()
  director?: string;

  @IsOptional()
  @IsInt()
  @Min(1800)
  year?: number;

  @IsOptional()
  @IsArray()
  genres?: string[];
}