import { Router } from "express";
import BookController from "../controllers/bookController";


export const bookRouter = Router()
bookRouter.delete('/books/:id', BookController.deleteBook)
bookRouter.put('/books/:id', BookController.updateBook)
bookRouter.post('/books',  BookController.createBook)
bookRouter.get('/books/:id', BookController.getBook)
bookRouter.get('/books', BookController.listBooks)