import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
    const router = useRouter();
    return (
        <div className={styles.topnav}>
            <Link href="/" className={router.pathname == "/" ? styles.active : ''}>Welcome</Link>
            <Link href="/UsersList" className={router.pathname == "/UsersList" ? styles.active : ''}>List of Users</Link>
            <Link href="/createUser" className={router.pathname == "/createUser" ? styles.active : ''}>Create User</Link>
        </div>  
    )
}

export default Navbar