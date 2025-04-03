import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        MongoId: {
            type: String,
            required: true
        },
        ISBN: {
            type: Number,
            required: true
        },
        Name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Book = mongoose.model('Book', bookSchema);