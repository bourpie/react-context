import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState([
        { title: 'Papillon', id: 1 },
        { title: 'Guerre et paix', id: 2 },
        { title: 'La mémoire dans la peau', id: 3 },
        { title: 'Le capital', id: 4 },
    ])

    const exposed = {
        books
    }

    return ( 
        <BookContext.Provider value={exposed}>
            { children }
        </BookContext.Provider>
     );
}