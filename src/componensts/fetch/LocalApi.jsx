import React, { useEffect, useState } from 'react'

function LocalApi() {
    const [books, setBooks] = useState([])
    
        useEffect(() => {
            fetchBooks()
        }, [])
    
        const fetchBooks = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const bookData = await response.json()
          console.log(bookData)
          setBooks(bookData)
        }
  return (
    <div>LocalApi</div>
  )
}

export default LocalApi