'use client'

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <section>
        <h2 className='text-2xl font-bold'>Home</h2>
        <p>
          Hi, Nino here. In simple words I am an Artist by hobbie and Designer by heart and a Developer by passion.
          I like simple and functional things without the necessity of weird solutions. My sign is
          "perfection do not exists but there is always a better solution".
          <button className='m-0'>
            <span className='bg-gray-500 text-white ml-2 rounded-sm p-0.5'>Lets go and know more about me {":)"}</span>
          </button>
        </p>
      </section>
      <hr className="border-solid border-t-2 border-t-black my-8" />
      <section>
        <h2 className='text-2xl font-bold'>Projects</h2>
        <p>
          Information about projects
          <button onClick={() => router.push('/project')} className='m-0'>
            <span className='bg-gray-500 text-white ml-2 rounded-sm p-0.5'>Come and see some of my projects{":)"}</span>
          </button>
        </p>
      </section>
      <hr className="boder-solid border-t-2 border-t-black my-8" />
      <section>
        <h2 className="text-2xl font-bold">Contact</h2>
        <p>Contact information</p>
      </section>
    </div>
  )
}
