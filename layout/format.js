import Header from '../components/header'
import Footer from '../components/footer'
import Newsletter from '@/components/newsletter'
import Head from "next/head"

export default function format({ children }) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </>
    )
}