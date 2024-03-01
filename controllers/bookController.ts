import { 
    INTERNAL_SERVER_ERROR_MSG,
    handleValidationErrors, 
    IValidationError, 
    handleDBErrors, 
    IDBError, 
} from "../utils/errors";
import { BookResponse, ModifyBookRequestDTO } from "../dto/bookDTO";
import { plainToClass, plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { BookModel, IBook} from "../models/Book";
import { Request, Response } from "express";




export default class BookController {

    static createBook = async ( request:Request, response:Response) : Promise<Response<BookResponse>> => {
        try{
            const bookRequestDto = plainToInstance(ModifyBookRequestDTO, request.body);
            try{
                await validateOrReject(bookRequestDto);
            }catch(error){  
                const errors = handleValidationErrors(error as Array<IValidationError>)
                return response.status(400).json(errors)
            }
    
            let book: IBook = new BookModel({...bookRequestDto, price: bookRequestDto.price.toString()});
            try {
                book = await book.save()
            } catch (error) {
                const errors = handleDBErrors(error as IDBError)
                return response.status(400).json(errors)
            }
    
            const bookResponse = plainToClass(BookResponse, book.toJSON());
            return response.status(201).json(bookResponse)
        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: INTERNAL_SERVER_ERROR_MSG})
        }
    }

    static listBooks = async (request:Request, response:Response) : Promise<Response<BookResponse[]>> => {
        try{
            const books: IBook[] = await BookModel.find().exec() as IBook[];
            const bookResponses: BookResponse[] = books.map(book => {
                const plainBook = book.toObject();
                return plainToClass(BookResponse, plainBook);
            });
            return response.status(200).json(bookResponses)
        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: INTERNAL_SERVER_ERROR_MSG})  as Response<BookResponse[]>;
        }   
    }

    static getBook = async (request:Request, response:Response) : Promise<Response<BookResponse>> => {
       try{
           let book:IBook|null =  await BookModel.findById(request.params.id).exec() as IBook
    
           if (!book) {
               return response.status(404).json({ message: "Book not found" })
           }
           
           const bookResponse = plainToClass(BookResponse, book.toJSON());
           return response.status(200).json(bookResponse)
       } catch (error) {
           console.log(error)
           return response.status(500).json({ message: INTERNAL_SERVER_ERROR_MSG}) as Response<BookResponse>;
       }
    }

    static updateBook = async (request:Request, response:Response) : Promise<Response<BookResponse>> => {
        try{
            const bookRequestDto = plainToInstance(ModifyBookRequestDTO, request.body);
            try{
                await validateOrReject(bookRequestDto, {skipMissingProperties: true});
            }catch(error){
                const errors = handleValidationErrors(error as Array<IValidationError>)
                return response.status(400).json(errors)
            }

            try {
                const book:IBook|null = await BookModel.findOneAndUpdate(
                    {_id: request.params.id},
                    {...bookRequestDto},
                    {new: true}
                )
                const bookResponse = plainToClass(BookResponse, book?.toJSON());
                return response.status(200).json(bookResponse)
            } catch (error) {
                const errors = handleDBErrors(error as IDBError)
                return response.status(400).json(errors)
            }

        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: INTERNAL_SERVER_ERROR_MSG}) as Response<BookResponse>;
        }
    }


    static deleteBook = async (request:Request, response:Response) : Promise<Response<any, any>> => {
        try {
            const deletedBook = await BookModel.findByIdAndDelete(request.params.id);
    
            if (!deletedBook) {
                return response.status(404).json({ message: 'Book not found' });
            }
    
            return response.status(204);
        } catch (error) {
            console.error('Error deleting book:', error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }
}