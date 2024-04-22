'use client'

import { useRouter } from 'next/navigation';
import { URL } from '../constants/urls';
import Button, {Action} from '@/components/Button/Button';

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
          <Button type={Action.LINK} url={URL.ABOUT.MAIN} text="Lets go and know more about me :)"></Button>
        </p>
      </section>
      <hr className="border-solid border-t-2 border-t-black my-8" />
      <section>
        <h2 className='text-2xl font-bold'>Projects</h2>
        <p>
          Information about projects
          <Button type={Action.LINK} url={URL.PROJECT.MAIN} text="Come and see some of my projects :)"></Button>
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
