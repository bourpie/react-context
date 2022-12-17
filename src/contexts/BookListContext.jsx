import { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookListContext = createContext();

const BookListContextProvider = ({children}) => {
    const [books, dispatch] = useReducer(bookReducer, [])

    return (
        <BookListContext.Provider value={{books, dispatch}}>
            {children}
        </BookListContext.Provider>
    )
}

export default BookListContextProvider;