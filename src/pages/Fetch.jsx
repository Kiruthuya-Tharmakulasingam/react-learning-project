import React, { useEffect, useState } from 'react'

function Fetch() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const userData = await response.json()
      console.log(userData)
      setUsers(userData)
    }

  return (
    <div></div>
  )
}

export default Fetch