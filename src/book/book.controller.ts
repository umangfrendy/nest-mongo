import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreteBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto copy';

import { Query as ExpressQuery } from 'express-serve-static-core'
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

        @Get()
        async getAllBooks(@Query() query: ExpressQuery): Promise < Book[] > {
            return this.bookService.findAll(query)
        }

        @Post()
        @UseGuards(AuthGuard())
        async createBook(
            @Body()
            book :CreteBookDto,
        ): Promise<Book> {
            return this.bookService.create(book)
        }

        @Get(':id')
        async getBook(
            @Param('id')
            id :string,
        ): Promise<Book> {
            return this.bookService.findById(id)
        }

        @Put(':id')
        async updateBook(
            @Param('id')
            id :string,
            @Body()
            book :UpdateBookDto,
        ): Promise<Book> {
            return this.bookService.updateById(id,book)
        }

        @Delete(':id')
        async deleteBook(
            @Param('id')
            id :string,
        ): Promise<Book> {
            return this.bookService.deleteById(id)
        }
    }
