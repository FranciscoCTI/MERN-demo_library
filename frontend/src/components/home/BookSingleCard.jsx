import React from 'react'
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import BookModal from './BookModal';

const BookSingleCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div key={item._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                {item.ISBN}
            </h2>
            <h4 className='my-2 text-gray-500'>{item._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2x1' />
                <h2 className='my-1'>{item.Name}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className='text-3x1 text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                ></BiShow>
                <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${item._id}`}>
                        <BsInfoCircle className='text-2x1 text-green-800 hover:text-black' />
                    </Link>
                    <Link to={`/books/edit/${item._id}`}>
                        <AiOutlineEdit className='text-2x1 text-yellow-600 hover:text-black' />
                    </Link>
                    <Link to={`/books/delete/${item._id}`}>
                        <MdOutlineDelete className='text-2x1 text-red-600 hover:text-black' />
                    </Link>
                </div>
            </div>
            {showModal && (<BookModal book={item}
                onClose={() => setShowModal(false)} />)
            }
        </div>
    )
}

export default BookSingleCard