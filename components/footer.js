import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function footer() {

  const bg={
    backgroundImage:"url('/images/bob1.png')",
    backgroundRepeat: 'no-repeat',
  }

  return (
    <footer className='bg-gray-50' style={bg}>
      <div className='py-5 flex flex-col items-center'>
        <div className='py-5' >
          <div className='flex gap-6 justify-center'>
            <Link legacyBehavior href={"/"}><ImFacebook /></Link>
            <Link legacyBehavior href={"/"}><ImTwitter /></Link>
            <Link legacyBehavior href={"/"}><ImYoutube /></Link>

          </div>
          
            <p className="py-5 text-gray-400 text-center " >
              Copyright © 2023 All rights reserved | This is a templete website created by Konal Puri
            </p>
            <p className="py-5 text-gray-400 text-center" >
              Terms and Conditions
            </p>
          
        </div>
      </div>

    </footer>
  )
}
