import express from 'express';

const router = express.Router();

import { Book } from '../models/bookModel.js';

//Route for creating a new book
router.post('/', async (req, res) => {
    try {
        if (!req.body.MongoId || !req.body.ISBN || !req.body.Name) {
            return res.status(400).send({
                message: 'please send all required fields next time'
            })
        }
        const newBook = {
            MongoId: req.body.MongoId,
            ISBN: req.body.ISBN,
            Name: req.body.Name
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

///route to get all the books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json(
            {
                count: books.length,
                datum: books
            }
        );
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//route to get one book by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//route to update a book
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.MongoId || !req.body.ISBN || !req.body.Name) {
            return res.status(400).send({
                message: 'please send all required fields next time'
            });
        }

        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: 'Book updated succesfully' });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//route for deleting a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book deleted succesfully' });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
