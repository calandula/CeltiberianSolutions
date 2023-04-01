import UserCard from './UserCard';
import * as React from "react";
import styles from '../../styles/UsersList.module.css'

export const getServerSideProps = async () => {
  try {
  const res = await fetch(process.env.apiURL + '/users');
  const data = await res.json()
  return {
      props: { users: data }
  }
}
catch (error) {
  console.error(error);
    return {
      props: { users: [] },
    };
}
}

const UsersList = ({ users }) => {
  return (
      <div className={styles.userlist}>
          {users.map(user => (
              <UserCard key={user.id} user={user}></UserCard>
          ))}
      </div>
  )
}

export default UsersList