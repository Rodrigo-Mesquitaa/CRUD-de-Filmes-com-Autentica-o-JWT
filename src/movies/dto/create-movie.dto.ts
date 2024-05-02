import { IsNotEmpty, IsString, IsInt, Min, IsArray } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  director: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1800)
  year: number;

  @IsNotEmpty()
  @IsArray()
  genres: string[];
}
