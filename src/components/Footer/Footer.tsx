'use client'

import { faBackwardStep, faForwardStep, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { CvButton } from '@/components';
import { useAppSelector } from '@/lib/store/hooks';

export default function Footer(props: any) {

  const [paused, setPaused] = useState(false);
  const footerState = useAppSelector(state => state.footer.value);

  const getChosenComponent = (component: string) => {
    let template;

    switch (component) {
      case "cv_button":
        template = <CvButton />
        break;
      default:
        template = <p>custom item</p>;
        break;
    }

    return (
      <article className="max-h-20 p-1 w-full flex flex-row justify-center">
        { template }
      </article>
    )
  }

  return (
    <footer className={"bg-gray-300 grid grid-cols-10 " + props.className}>
      <article className="col-span-2 flex flex-row items-center">
        <p><span>menu</span></p>
      </article>
      <article className="col-span-6 flex flex-row justify-center items-center h-full">
        <p className='flex gap-4'>
          <FontAwesomeIcon className='cursor-pointer' icon={faBackwardStep} size='2x' />
          <FontAwesomeIcon onClick={() => setPaused(!paused)} className='cursor-pointer' icon={paused ? faPause : faStop} size='2x' />
          <FontAwesomeIcon className='cursor-pointer' icon={faForwardStep} size='2x' />
        </p>
      </article>
      <article className="col-span-2 flex flex-row items-center">
        {
          getChosenComponent(footerState ?? '')
        }
      </article>
    </footer>
  )
}