"use client"
import Image from 'next/image';
import Link from 'next/link';
import Author from '../components/author'
import getPost from '../lib/helper'
import fetcher from '../lib/fetcher';
import Spinner from '../components/spinner'
import Error from '../components/error';

export default function section2() {

    const { data, isLoading, isError } = fetcher('api/posts')
    if(isLoading)return <Spinner></Spinner>
    if(isError)return <Error></Error>




    console.log(process.env.baseURL)
    return (
        <section className="conatainer mx-auto md:px-20 py-10" >
            <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    data.map((value,index)=>(
                <Post data={value}key={index}></Post>
                ))
                }
            </div>
        </section>

    )
}


function Post({data}) {
    const {id,title, category,img,published,author}= data;
    return (
        <div className="item">
            <div className="images" >
                <Link href={`/posts/${id}`} legacyBehavior>
                    <a>
                        <Image src={img|| "/"} className='rounded' width={500} height={350} />
                    </a>
                </Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className='cat' >
                    <Link href={`/posts/${id}`}> <a className='text-orange-600 hover:text-orange-800' >{category || "unknown"}</a></Link>
                    <Link href={`/posts/${id}`}> <a className='text-gray-600 hover:text-gray-800' >{published || "unknown"}</a></Link>
                </div>

                <div className='title' >
                    <Link href={`/posts/${id}`}> <a className='text-2xl font-bold hover:text-black-900' >{title || "Title"}</a> </Link>
                </div>

                <p className='py-3' >
                    Aliqua irure cillum reprehenderit consectetur. Eu in non amet nulla cupidatat officia commodo nisi eu. Duis officia sit cillum dolore tempor sint magna officia do aliquip cillum dolore. Nisi amet occaecat consectetur ullamco mollit duis non excepteur dolor sit ea adipisicing duis. Pariatur sit ut adipisicing consectetur incididunt sint irure labore veniam laboris velit.
                </p>
                {
                                      author?<Author {...author} ></Author>:<></>

                }



            </div>

        </div>
    )
}