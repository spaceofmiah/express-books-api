import mongoose from "mongoose";


export const BookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        price: { type: mongoose.Types.Decimal128, required: true }
    }
)


export const Book = mongoose.model('Book', BookSchema)