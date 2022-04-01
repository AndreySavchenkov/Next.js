import Link from 'next/link'
import Image from "next/image";
import {useRouter} from "next/router";
import styles from '../Navbar/Navbar.module.scss'

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Contacts', path: '/contacts'},
]

const Navbar = () => {
    const {pathname} = useRouter();

    return (
        <nav className={styles.wrapper}>
            <Image src="/logo.png" alt="logo" width={50} height={50}/>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}><a
                        className={`${pathname === path ? styles.active : null} ${styles.link}`}>{title}</a></Link>
                ))}
            </div>
        </nav>
    )
}


export default Navbar