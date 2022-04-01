import Link from 'next/link'
import Image from "next/image";
import {useRouter} from "next/router";

const navigation = [
    {id:1,title:'Home',path:'/'},
    {id:2,title:'Posts',path:'/posts'},
    {id:3,title:'Contacts',path:'/contacts'},
]

const Navbar = () => {
    const {pathName} = useRouter();
    return(
        <nav>
            <div>
                <Image src="/logo.png" alt="logo" width={50} height={70}/>
            </div>
            <div>
                {navigation.map(({id,title,path}) => (
                    <Link key={id} href={path}><a className={pathName === path ? styles.active : null}>{title}</a></Link>
                ))}
            </div>
        </nav>
    )
}


export default Navbar