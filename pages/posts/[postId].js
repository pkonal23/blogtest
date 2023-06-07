import Format from '../../layout/format';
import 'tailwindcss/tailwind.css';
import Author from '../../components/author';
import Image from 'next/image';
import Related from '../../components/related'
import getPost from '../../lib/helper'
import fetcher from '../../lib/fetcher'
import Spinner from '../../components/spinner'
import Error from '../../components/spinner';
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'

export default function Page({ fallback }) {
    const router = useRouter()
    const { postId } = router.query;
    const { data, isLoading, isError } = fetcher(`api/posts/${postId}`)
    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>
    return (
        <SWRConfig value={{ fallback }}>
            <Article {...data} ></Article>
        </SWRConfig>
    )
}

function Article({ id, title, subtitle, category, img, published, discription, author }) {
    return (


        <Format>
            <section className='py-10 md:px-10 flex justify-center items-center'>
                <div className='max-w-6xl'>
                    <div className='flex justify-center '>
                        {
                            author ? <Author {...author} ></Author> : <></>

                        }
                    </div>

                    <div className='post'>
                        <h1 className='font-bold text-4xl text-center mb-5'>
                            {title || "No title"}
                        </h1>
                        <p className='text-center' >
                            {subtitle || "No subtitle"}
                        </p>

                        <div className='py-10 flex justify-center'>
                            <Image alt='' src={img || "/"} width={900} height={600} />
                        </div>
                        <div className='text-gray-800 flex flex-col gap-4' >
                            {discription || "No description"}
                        </div>
                    </div>
                </div>
            </section>
            <Related></Related>
        </Format>
    );
}
export async function getStaticProps({ params }) {
    const posts = await getPost(params.postId)

    return {
        props: {
            fallback: {
                '/api/posts': posts
            }

        }
    }

}

export async function getStaticPaths() {
    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}