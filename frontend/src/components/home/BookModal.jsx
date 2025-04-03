import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from 'react-icons/bi'

const BookModal = ({ book, onClose }) => {
    return (
        <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose className='absolute right-6 top-6 text-3x1 text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {book.ISBN}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2x1' />
                    <h2 className='my-1'>{book.Name}</h2>
                </div>
                <p className='mt-4'>Anything you want to show</p>
                <p className='mt-2'>Según la versión sostenida por el propio autor en el prólogo de la Primera Parte, que participó en la Guerra de Arauco entre 1557 y 1559, el poema habría sido escrito durante su estancia en la Capitanía General de Chile, usando, a manera de papel, cortezas de árboles y otros elementos rústicos. Ercilla, quien como antiguo paje de la corte de Felipe II contaba con una educación y condición social mayor que la del promedio de los conquistadores, había llegado a la Chile como parte de la expedición de refuerzo comandada por el nuevo gobernador García Hurtado de Mendoza, enviada en medio de la difícil situación de la empresa colonizadora española enfrentada a la resistencia mapuche.</p>
            </div>

        </div>
    )
}

export default BookModal