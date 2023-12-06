import { Controller, Post, Get, Put, Delete, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from './dtos/create-book.dto';
import { FilterBookDTO } from './dtos/filter-book.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('books')
@Controller('store/books')
export class BookController {
  constructor(private bookService: BookService) { }

  @Get('/')
  @ApiOperation({ summary: 'Get all books' })
  async getBooks(@Query() filterBookDTO: FilterBookDTO) {
    if (Object.keys(filterBookDTO).length) {
      const filteredBooks = await this.bookService.getFilteredBooks(filterBookDTO);
      return filteredBooks;
    } else {
      const allBooks = await this.bookService.getAllBooks();
      return allBooks;
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get book by id' })
  async getBook(@Param('id') id: string) {
    const book = await this.bookService.getBook(id);
    if (!book) throw new NotFoundException('book does not exist!');
    return book;
  }

  @Post('/')
  @ApiOperation({ summary: 'Add book' })
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.bookService.addBook(createBookDTO);
    return book;
  }

  @Put('/:id')
  @ApiOperation({ summary: 'update book' })
  async updateBook(@Param('id') id: string, @Body() createBookDTO: CreateBookDTO) {
    const book = await this.bookService.updateBook(id, createBookDTO);
    if (!book) throw new NotFoundException('book does not exist!');
    return book;
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete book' })
  async deleteBook(@Param('id') id: string) {
    const book = await this.bookService.deleteBook(id);
    if (!book) throw new NotFoundException('book does not exist');
    return book;
  }
}
