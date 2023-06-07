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
import Error from 'components/error';
import Trending from '../pages/api/trending'




export default function Section1() {

    const { data, isLoading, isError } = fetcher('api/trending')
    if(isLoading)return <Spinner></Spinner>
    if(isError)return <Error></Error>

    const items = data.map((value, index) => <Slide key={index} data={value} />);

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1000: { items: 1 }
    };


    const bg = {
        background: "url('/images/blob.svg')no-repeat",
        backgroundPosition: "right",
    }
    return (
        <section className="py-16" style={bg} >
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>


                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    autoPlay
                    infinite
                    autoPlayInterval={4000}
                    animationDuration={2000}
                />

            </div>
        </section>
    );
}

function Slide({data}) {

    const {id,title, category,img,published,discription,author} = data;
    return (
        <div className="grid md:grid-cols-2 gap-20">
            <div className="image">
                <Link href={`/posts/${id}`} legacyBehavior>
                    <a>
                        <Image src={img|| "/"}width={600} height={600} />
                    </a>
                </Link>
            </div>
            <div className="info">
                <div className='cat' >
                    <Link href={`/posts/${id}`}> <a className='text-orange-600 hover:text-orange-800' >{category|| "Unknown"}</a></Link>
                    <Link href={`/posts/${id}`}> <a className='text-gray-600 hover:text-gray-800' >{published|| "Unknown"}</a></Link>
                </div>
                <div className='title' >
                    <Link href={`/posts/${id}`}> <a className='text-3xl md:text-6xl font-bold hover:text-black-900' >{title|| "UnknownTitle"}</a> </Link>
                </div>
                <p className='py-3' >
                {discription|| "UnknownDes."}
                </p>
                {
                   author?<Author {...author} ></Author>:<></>
                }
                
            </div>
        </div>
    );
}
