import Link from "next/link"
import Image from "next/image"
import Author from '../components/author'

import fetcher from '../lib/fetcher';
import Spinner from '../components/spinner'
import Error from '../components/error';

export default function related() {

    const { data, isLoading, isError } = fetcher('api/popular')
    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (
        <section className='pt-20 container mx-auto md:px-20 py-16 center-content' >
            <h1 className='font-bold text-3xl py-10'>
                Related
            </h1>
            <div className='grid lg:grid-cols-1 gap-14 '>
                {
                    data.map((value,index)=>
                        <Post key={index} data={value}></Post>

                    
                        )
                }
                
            </div>
        </section>
    )
}


function Post({ data }) {
    const { id, title, category, img, published, description, author } = data;

    return (

        <div className="flex gap-5" >
            <div className="image flex flex-col justufy-start">
                <Link href={`/posts/${id}`} legacyBehavior>
                    <a>
                        <Image src={img||"/"} className="rounded" width={300} height={250} />
                    </a>
                </Link>
            </div>
            <div className="info flex justify-center flex-col" >
                <div className='cat' >
                    <Link href={`/posts/${id}`}> <a className='text-orange-600 hover:text-orange-800' >{category||"No categoty"}</a></Link>
                    <Link href={`/posts/${id}`}> <a className='text-gray-600 hover:text-gray-800' >{published||"Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}> <a className='text-xl md:text-2xl font-bold hover:text-black-900' >{title||"Unknown"}</a> </Link>
                </div>
                author?<Author {...author} ></Author>:<></>

            </div>
        </div>
    )
}