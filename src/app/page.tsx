'use client'

import {
  NoteContainer,
  InfoContainer,
  Container
} from '@/components/Container'
import Button from '@/components/Button/Button'
import { useState, useEffect } from 'react';
import { DESCRIPTIONS } from '@/contants/page';

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((counter) => (counter + 1) % (DESCRIPTIONS.length))
    }, 3000)
  }, [counter])

  return (
    <main className="w-full h-screen">
      <div className="relative flex flex-row w-full h-2/5">
        <div className='w-1/2 flex flex-col justify-center items-start p-4' id="description">
          <span className="font-extrabold text-5xl">Hi, i'm Nino</span>
          <div>
            <span className='text-xl'>I'm a...{DESCRIPTIONS[counter]} </span>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center' id="img">img</div>
        <div className="absolute flex w-1/2 h-fit bg-gray-500 -bottom-6 left-1/4">
          <Button className="w-1/3 m-0 flex flex-row justify-between">
            <div>Projects</div>
            <div>{"->"}</div>
          </Button>
          <Button className="w-1/3 m-0 flex flex-row justify-between">
            <div>About</div>
            <div>{"->"}</div>
          </Button>
          <Button className="w-1/3 m-0 flex flex-row justify-between">
            <div>Contact</div>
            <div>{"->"}</div>
          </Button>
        </div>
      </div>
      <div className="bg-gray-400 w-full min-h-3/5 h-3/5 max-h-fit p-5">
        <div className="flex flex-row justify-center items-center h-full">
          <InfoContainer
            width={200}
            height={200}
            header={
              <div className="h-1/3">
                <div className='bg-gray-700 flex flex-row justify-center'>
                  <div id="buttons" className='flex flex-row justify-start w-1/3'>
                    <button>x</button>
                    <button>{"<>"}</button>
                  </div>
                  <div className="text-left w-2/3">title long title</div>
                </div>
                <div>img</div>
              </div>
            }
            body= {
              <div className="h-2/3">body</div>
            }
            footer={
              <div>footer</div>
            }
          >
          </InfoContainer>
        </div>
      </div>
    </main>
  )
}
