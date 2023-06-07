"use client"
import Image from 'next/image';
import Link from 'next/link';
import Author from '../components/author'

import fetcher from '../lib/fetcher';
import Spinner from '../components/spinner'
import Error from '../components/error';

export default function section4() {
    const { data, isLoading, isError } = fetcher('api/popular')
    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (
        <section className="container mx-auto md:px-20 py-16 center-content">
            <div className="grid lg:grid-cols-2 gap-14 " >
                <div className="item">
                    <h1 className="font-bold text-4xl py-12 text-center">Category 1</h1>
                    <div className="flex flex-col gap-6" >
                        {data[1] ? <Post data={data[1]}></Post> : <></>}
                        {data[2] ? <Post data={data[2]}></Post> : <></>}
                        {data[3] ? <Post data={data[3]}></Post> : <></>}
                    </div>
                </div>
                <div className='item'>
                    <h1 className="font-bold text-4xl py-12 text-center">Category 2</h1>
                    <div className="flex flex-col gap-6 " >
                        {data[4] ? <Post data={data[4]}></Post> : <></>}
                        {data[5] ? <Post data={data[5]}></Post> : <></>}
                        {data[2] ? <Post data={data[2]}></Post> : <></>}
                    </div>
                </div>
            </div>

        </section>
    )
}

function Post({ data }) {
    const { id, title, category, img, published, description, author } = data;

    return (

        <div className="flex gap-5" >
            <div className="image flex flex-col justufy-start">
                <Link href="/" legacyBehavior>
                    <a>
                        <Image src={img|| "/"} className="rounded" width={300} height={250} />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col" >
                <div className='cat' >
                    <Link href={`/posts/${id}`}> <a className='text-orange-600 hover:text-orange-800' >{category || "Unknown"}</a></Link>
                    <Link href={`/posts/${id}`}> <a className='text-gray-600 hover:text-gray-800' >{published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}> <a className='text-xl md:text-2xl font-bold hover:text-black-900' >{title || "Unknowntitle"}</a> </Link>
                </div>
                {
                    author ? <Author {...author} ></Author> : <></>

                }
            </div>
        </div>
    )
}