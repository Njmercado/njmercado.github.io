'use client'

import { useAppDispatch } from '@/lib/store/hooks';
import { URL } from '../constants/urls.constant';
import Button, {Action} from '@/components/Button/Button';
import { useEffect } from 'react';
import { setComponent } from '@/lib/store/features/footer/footerSlice';
import './page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import { ContactForm } from '@/components';

export default function Home() {

  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(setComponent('cv_button')) }, [])

  return (
    <article>
      <section>
        <p>
          Hi, Nino here. I am <strong>Computer Engineer</strong>, <strong>Frontend</strong> and <strong>Backend Dev</strong>.
          In simple words: Artist by hobbie, Designer by heart and a Developer by passion.
          I like simple and functional things without the necessity of weird solutions.
          <br />
          My sign is <q><em>perfection do not exists but there is always a better solution</em></q>.
          <Button className="ml-2" type={Action.LINK} url={URL.ABOUT.MAIN} value="Lets go and know more about me :)"/>
        </p>
      </section>
      <hr className="border-solid border-t-2 border-t-black my-8" />
      <section>
        <h2 className='text-2xl font-bold'>Projects</h2>
        <p className="mt-5">
          3+ years of experience developing multiple solutions with different techs and architectures, that is a great ice breaker, right?
          <Button className="ml-2" type={Action.LINK} url={URL.PROJECTS.MAIN} value="Come and see some of my projects :)"/>
        </p>
      </section>
      <hr className="boder-solid border-t-2 border-t-black my-8" />
      <section>
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-5">
          I know you want more information and I would glad to help you, just fill this tiny tiny form here 
          <FontAwesomeIcon className='ml-2' icon={faHandPointDown} shake={true}/>
        </p>
        <div className='mt-5'>
          <ContactForm/>
        </div>
      </section>
    </article>
  )
}
