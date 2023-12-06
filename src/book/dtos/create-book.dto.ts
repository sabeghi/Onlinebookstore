import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDTO {
  @ApiProperty({ example: 'book name', description: 'The name of the book' })
  name: string;

  @ApiProperty({ example: 'author name', description: 'The author of the book' })
  author: string;

  @ApiProperty({ example: 'book price', description: 'The price of the book' })
  price: number;
  
  @ApiProperty({ example: 'book genre', description: 'The genre of the book' })
  genre:string;
  
  @ApiProperty({ example: 'book year', description: 'The year of the book' })
  year: number;
  
  @ApiProperty({ example: 'rate name', description: 'The rate of the book' })
  rate:number;

}