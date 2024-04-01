'use client'

import {
  NoteContainer,
  InfoContainer,
  Container
} from '@/components/Container'
import Button from '@/components/Button/Button'
import { useState, useEffect } from 'react';
import { DESCRIPTIONS, ITEMS } from '@/contants/page';

export default function Home() {

  const getProjects = () => {
    let projects: any[] = []
    for (var i = 0; i < 7; i++) {
      projects.push(
        // TODO: move this to a function
        <div className="grid grid-cols-6  w-full h-fit my-2">
          <div className="col-span-2 flex justify-center items-center">
            <img className='rounded-full border-black border-2' style={{height: '50px', width: '50px'}} src={ITEMS[0]} alt="" />
          </div>
          <div className="col-span-4 flex flex-col w-full">
            <div className="p-2">Project Name</div>
            <div className="grid grid-cols-2">
              <div className="bg-gray-400 text-white col-span-1 mx-2 text-center" style={{borderRadius: '10px'}}>tech</div>
              <div className="bg-gray-400 text-white col-span-1 mx-2 rounded-xl text-center">tech 2</div>
            </div>
          </div>
        </div>
      )
    }

    return projects;
  }

  return (
    <div className="h-screen grid grid-rows-10">
      <div className="grid grid-cols-10 row-span-9 h-full">
        {/* This part gonna be used to display de main pages */}
        <div className="bg-gray-500 flex flex-col col-span-2">
          <div className='h-1/2'>
            <div>Home</div>
            <div>Projects</div>
            <div>About me</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
          <div className="w-full h-1/2 relative">
            <div className='absolute max-h-full w-full overflow-scroll scroll-smooth overflow-x-hidden' style={{scrollbarWidth: 'none'}}>
              {
                getProjects().map(project => project)
              }
            </div>
          </div>
        </div>
        <div className="col-span-8 h-full bg-gray-100">

        </div>
      </div>
      {/* this part gonna control the pages */}
      <div className="bg-gray-300 row-span-1">
        <div className="flex flex-row justify-center items-center h-full">
          <div className='mx-2'>{"|<"}</div>
          <div className='mx-2'>{"||"}</div>
          <div className='mx-2'>{">|"}</div>
        </div>
      </div>
    </div>
  )
}
