import { useContext, useState } from 'react';
import { BookListContext } from "../contexts/BookListContext"
import uuid from 'react-uuid';

function NewBookForm({book}) {
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')

    const { dispatch } = useContext(BookListContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { title, author }});
        setTitle('');
        setAuthor('');
      }

    return (
        <form className='mt-4' onSubmit={handleSubmit}>
            <label className='block' htmlFor="title">Title</label>
            <input 
                className='block border' 
                id="title" 
                type="text" 
                value={title}
                required 
                onChange={e => setTitle(e.target.value)}
            />

            <label className='block' htmlFor="author">Author</label>
            <input 
                className='block border mb-2' 
                id="author" 
                type="text" 
                value={author} 
                required
                onChange={e => setAuthor(e.target.value)}
            />

            <button className='border px-3 py-1' type="submit">Add book</button>
        </form>
    )
}

export default NewBookForm