import BookListContextProvider from "../contexts/BookListContext"
import Books from "../components/Books"
import NewBookForm from "../components/NewBookForm"
import BookNavbar from "../components/BookNavbar"
function BookListApp() {  
    return (
        <BookListContextProvider>
            <div className="container mx-auto p-5">
                <BookNavbar />
                <Books />
                <NewBookForm />
            </div>
        </BookListContextProvider>
    )
}

export default BookListApp