import {useContext} from 'react'
import { BookListContext } from '../contexts/BookListContext'

function BookNavbar() {
    const { books } = useContext(BookListContext)
    return (
        <>
            <h1 className='text-3xl'>Reading list</h1>
            <p className='mb-4'>Curently {books.length} books</p>

        </>
    )
}

export default BookNavbar