import { useContext } from 'react';
import { BookListContext } from "../contexts/BookListContext"

const List = () => {
    const { removeBook } = useContext(BookListContext)
    return (
        <div>
            <ul>
                { books.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>          
    )
}

export default List;