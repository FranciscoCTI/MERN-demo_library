import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack'

const DeleteBook = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();

    const handleDeleteBook = () => {
        axios.delete(`https://mern-demo-library.onrender.com/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book deleted', { variant: 'success' });
                navigate('/');
            }).catch((error) => {
                setLoading(false);
                alert('An error happent');
                console.log(error);
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2x1'>Are you sure you want to remove it?</h3>
                <button className='p-4 bg-red-600' onClick={handleDeleteBook}>Yes, delete it</button>
            </div>
        </div>
    )
};

export default DeleteBook;