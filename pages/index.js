import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";
import Head from "next/head";
import Image from "next/image";
import nextLogo from "../public/nextLogo.png"

const Home = () => (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <div className={styles.wrapper}>
            <Heading text="My Test Next.js Application"/>
            <Heading text="+"/>
            <Heading text="JSONPlaceholder"/>
            <div className={styles.img}>
                <Image src={nextLogo}/>
            </div>

        </div>
    </>
)

export default Home;