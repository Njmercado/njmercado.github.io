'use client'

import { URL } from '../constants/urls.constant';
import Button, {Action} from '@/components/Button/Button';

export default function Home() {
  return (
    <main>
      <section>
        <p>
          Hi, Nino here. I'm <strong>Computer Engineer</strong>, <strong>Frontend</strong> and <strong>Backend Dev</strong>.
          In simple words: Artist by hobbie, Designer by heart and a Developer by passion.
          I like simple and functional things without the necessity of weird solutions.
          <br />
          My sign is <q><em>perfection do not exists but there is always a better solution</em></q>.
          <Button type={Action.LINK} url={URL.ABOUT.MAIN} value="Lets go and know more about me :)"></Button>
        </p>
      </section>
      <hr className="border-solid border-t-2 border-t-black my-8" />
      <section>
        <h2 className='text-2xl font-bold'>Projects</h2>
        <p>
          Information about projects
          <Button type={Action.LINK} url={URL.PROJECTS.MAIN} value="Come and see some of my projects :)"></Button>
        </p>
      </section>
      <hr className="boder-solid border-t-2 border-t-black my-8" />
      <section>
        <h2 className="text-2xl font-bold">Contact</h2>
        <p>Contact information</p>
      </section>
    </main>
  )
}
