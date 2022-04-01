import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import styles from  "../posts/styles/posts.module.scss"

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if(!data){
        return {
            notFound: true,
        }
    }

    return{
        props:{posts: data},
    }
}

const Posts = ({posts}) => {

    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <div className={styles.wrapper}>
                <Heading text={'Posts list:'}/>
                <ul className={styles.posts}>
                    {posts && posts.map(({id, title}) => (
                        <li key={id} className={styles.post}><Link href={`/posts/${id}`}>{title}</Link></li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Posts;