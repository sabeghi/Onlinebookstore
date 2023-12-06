import { ApiProperty } from '@nestjs/swagger';

export class ItemDTO {
  @ApiProperty({ example: 'bookId', description: 'The id of the book' })
  bookId: string;

  @ApiProperty({ example: 'book name', description: 'The name of the book' })
  name: string;

  @ApiProperty({ example: 'quantity', description: 'The quantity of the book' })
  quantity: number;

  @ApiProperty({ example: 'price name', description: 'The price of the book' })
  price: number;
}