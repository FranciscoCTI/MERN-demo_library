import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { apiURL } from '../../../backend/config';

const CreateBook = () => {
    const [Name, setName] = useState('');
    const [ISBN, setISBN] = useState(0);
    const [MongoId, setMongoId] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveBook = () => {
        const data = { Name, ISBN, MongoId };
        setLoading(true);
        axios.post(apiURL, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book created succesfully', { variant: 'success' });
                navigate('/');
            }).catch((error) => {
                setLoading(false);
                alert('An error just happened. Please check console');
                console.log(error);
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input
                        type='text'
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    ></input>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>ISBN</label>
                    <input
                        type='text'
                        value={ISBN}
                        onChange={(e) => setISBN(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    ></input>
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>MongoId</label>
                    <input
                        type='text'
                        value={MongoId}
                        onChange={(e) => setMongoId(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    ></input>
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>Save</button>
            </div>
        </div>
    )
};

export default CreateBook;