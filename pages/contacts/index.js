import Heading from '../../components/Heading'
import Head from "next/head";
import Link from "next/link";
import styles from "../contacts/styles/contacts.module.scss"

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {contacts: data},
    }
}

const Contacts = ({contacts}) => {


    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <div className={styles.wrapper}>
                <Heading text={'Contacts list:'}/>
                <ul className={styles.contacts}>
                    {contacts && contacts.map(({id, name}) => (
                        <li className={styles.contact} key={id}><Link href={`/contacts/${id}`}>{name}</Link></li>
                    ))}
                </ul>
            </div>
        </>
    )
}


export default Contacts;