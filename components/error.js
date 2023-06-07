import Image from 'next/image';

export default function Error() {
  return (
    <div className='text-center py-10'>
      <h1 className='text-3xl font-bold'>Something went wrong</h1>
      <div className='flex justify-center'>
        <Image src='/images/notfound1.png' alt='Not Found Image' width={400} height={400} />
      </div>
    </div>
  );
}
