'use client'

import { faBackwardStep, faForwardStep, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function Footer(props: any) {

  const [paused, setPaused] = useState(false);

  return (
    <footer className={"bg-gray-300 grid grid-cols-10 " + props.className}>
      <article className="col-span-2 flex flex-row items-center">
        <p><span>menu</span></p>
      </article>
      <article className="col-span-6 flex flex-row justify-center items-center h-full">
        <p className='flex gap-4'>
          <FontAwesomeIcon className='cursor-pointer' icon={faBackwardStep} size='2x'/>
          <FontAwesomeIcon onClick={() => setPaused(!paused)} className='cursor-pointer' icon={paused ? faPause: faStop} size='2x'/>
          <FontAwesomeIcon className='cursor-pointer' icon={faForwardStep} size='2x'/>
        </p>
      </article>
      <article className="col-span-2 flex flex-row items-center">
        <p>
          custom items
        </p>
      </article>
    </footer>
  )
}