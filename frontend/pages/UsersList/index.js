import UserCard from './UserCard';
import { useState, useEffect } from 'react'
import * as React from "react";
import styles from '../../styles/UsersList.module.css'

// export async function getServerSideProps() {
//   try {
//   const res = await fetch(process.env.apiURL + '/users');
//   const data = await res.json()
//   console.log(data)
//   return {
//       props: { users: data }
//   }
// }
// catch (error) {
//   console.log('error')
//     return {
//       props: { users: [] },
//     };
// }
// }

const UsersList = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(process.env.apiURL + '/users')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
      <div className={styles.userlist}>
          {data.map(user => (
              <UserCard key={user.id} user={user}></UserCard>
          ))}
      </div>
  )
}

export default UsersList