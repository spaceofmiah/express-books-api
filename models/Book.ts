import mongoose from "mongoose";


export const bookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'title is required'] 
    },
    author: { 
        type: String, 
        required: [true, 'author is required'] 
    },
    price: { 
        type: String,
        required: [true, 'price is required'] 
    }
})

export interface IBook extends mongoose.Document {
    title: String,
    price: String,
    author: String,
}

export const BookModel: mongoose.Model<IBook> = mongoose.model<IBook>('Book', bookSchema)