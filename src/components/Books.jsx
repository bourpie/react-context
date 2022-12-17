import { useContext } from "react"
import { BookListContext } from "../contexts/BookListContext"
import BookDetails from "./BookDetails";

export default function Books() {
    const { books } = useContext(BookListContext)

    return books.length ? (
            <ul>
                { books.map(book => (
                    <BookDetails book={book}key={book.id} />
                ))}

            </ul>
        ) : (
            <div>Nothing yet</div>
        )
}

