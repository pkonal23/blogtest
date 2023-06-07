'use client'
import Image from 'next/image';
import Link from 'next/link';
import Author from '../components/author'

import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import fetcher from '../lib/fetcher';
import Spinner from '../components/spinner'
import Error from '../components/error';



export default function section3() {
    const { data, isLoading, isError } = fetcher('api/popular')
    if(isLoading)return <Spinner></Spinner>
    if(isError)return <Error></Error>

    const items = data.map((value, index) => <Post key={index} data={value} />);


    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1000: { items: 2 }
    };





    return (
        <section className="conatainer mx-auto md:px-20 py-10 center-content" >
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                autoPlay
                infinite
                autoPlayInterval={4000}
                animationDuration={2000}
            />
        </section>

    )
}

function Post({data}) {
    const {id,title, category,img,published,discription,author} = data;
    return (
        <div className="grid">
            <div className="images" >
                <Link href={`/posts/${id}`} legacyBehavior>
                    <a>
                        <Image src={img|| "/"} width={600} height={400} />
                    </a>
                </Link>
            </div>

            <div className="info flex justify-center flex-col py-4 gap-8 ">
                <div className='cat' >
                    <Link href={`/posts/${id}`}> <a className='text-orange-600 hover:text-orange-800' >{category|| "Unknown"}</a></Link>
                    <Link href={`/posts/${id}`}> <a className='text-gray-600 hover:text-gray-800' >{published|| "Unknown"}</a></Link>
                </div>

                <div className='title pr-16' >
                    <Link href={`/posts/${id}`}> <a className='text-3xl md:text-4xl font-bold hover:text-black-900' >{title|| "Unknowntitle"}</a> </Link>
                </div>

                <p className='pr-16'>
                {discription|| "Unknowndes"}
                </p>
                {
                                      author?<Author {...author} ></Author>:<></>

                }



            </div>

        </div>
    )
}
