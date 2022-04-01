import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import Head from "next/head";

const MyApp = ({Component, pageProps}) => (
    <Layout>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
)

export default MyApp
