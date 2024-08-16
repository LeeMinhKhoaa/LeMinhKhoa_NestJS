import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Console } from 'console';
import { Bookdto } from 'src/dto/bookdto';
@Controller('books-controller')
export class BooksControllerController {
    lstBooks = [
        {
            "id":"1",
            "title":"Sách hay",
            "author":"Bá Điền",
            "publishedYear":"2020"
        },
        {
            "id":"2",
            "title":"Sách mới",
            "author":"Phong Tuấn",
            "publishedYear":"2023"
        },
        {
            "id":"3",
            "title":"Sách cũ",
            "author":"Tiến Đạt",
            "publishedYear":"2021"
        }
    ]
    @Get(':id')
    getOne(@Param('id') id : string) : object{
        return this.lstBooks.find(x => x.id == id)
    }

    @Put(':id')
    UpdateBook(@Param('id') id : string,@Body () Book: Bookdto) : object{
        const bookIndex = this.lstBooks.findIndex(x => x.id === id);

        if (bookIndex === -1) {
            throw new NotFoundException('Book not found');
        }
    
        // Cập nhật thông tin cuốn sách
        this.lstBooks[bookIndex] = Book;
        
        return this.lstBooks[bookIndex];
    }
    // Phương thưc thêm
    @Post()
    createBook(@Body () Book: Bookdto ){
        var newBook = {
            "id": Book.id,
            "title":Book.title,
            "author":Book.author,
            "publishedYear":Book.publishedYear

        }
        this.lstBooks.push(newBook)
        return "Thêm thành công"
    }
    // Phương thức get
    @Delete(':id')
    DeleteBook(@Param('id') id : string): string {
        const bookIndex = this.lstBooks.findIndex(x => x.id === id);

        if (bookIndex === -1) {
            throw new NotFoundException('Book not found');
        }
        this.lstBooks.splice(bookIndex,1)
        return "Xóa thành công"
    }
    
}
