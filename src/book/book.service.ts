import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDTO } from './dtos/create-book.dto';
import { FilterBookDTO } from './dtos/filter-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<BookDocument>) { }

  async getFilteredBooks(filterBookDTO: FilterBookDTO): Promise<Book[]> {
    const { rate, search } = filterBookDTO;
    let books = await this.getAllBooks();

    if (search) {
      books = books.filter(book => 
        book.name.includes(search) ||
        book.author.includes(search) ||
        book.genre.includes(search)
      );
    }

    if (rate) {
      books = books.filter(book => book.rate === rate)
    }

    return books;
  }

  async getAllBooks(): Promise<Book[]> {
    const books = await this.bookModel.find().exec();
    return books;
  }

  async getBook(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    return book;
  }

  async addBook(createBookDTO: CreateBookDTO): Promise<Book> {
    const newBook = await this.bookModel.create(createBookDTO);
    return newBook.save();
  }

  async updateBook(id: string, createBookDTO: CreateBookDTO): Promise<Book> {
    const updatedBook = await this.bookModel
      .findByIdAndUpdate(id, createBookDTO, { new: true });
    return updatedBook;
  }

  async deleteBook(id: string): Promise<any> {
    const deletedBook = await this.bookModel.findByIdAndRemove(id);
    return deletedBook;
  }
}