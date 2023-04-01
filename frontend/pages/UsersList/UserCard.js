import styles from '../../styles/UserCard.module.css'

const UserCard = (user) => {
    if (typeof user.name == "undefined") {
        user = user.user
    }
    if (!user) {
        return null;
    }
    return (
        <div className={styles.usercard}>
            <h2>{user.name}</h2>
            <h4>Username: {user.username}</h4>
            <p>ID: {user.id}</p>
        </div>
    )
}

export default UserCard