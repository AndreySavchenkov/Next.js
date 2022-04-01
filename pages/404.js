import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return (
        <>
            <Head>
                <title>404</title>
            </Head>
            <h1>404</h1>
            <p>This page note found</p>
        </>
    )
}


export default Error;