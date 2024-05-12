'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { URL } from '../../constants/urls.constant';

export default function Header(props: any) {
  const router = useRouter()
  const PAGES = ['Home', 'Projects', 'About', 'Blog', 'Contact']

  return (
    <nav className={"text-4xl bg-gray-500 flex flex-col justify-center p-4 pl-8 " + props.className}>
      <ul style={{ marginLeft: "20%" }} className='gap-2 grid'>
        {
          PAGES.map((page: string, index: any) => (
            <li key={index}>
              <a
                className="cursor-pointer"
                onClick={() => router.push(URL[page.toUpperCase()].MAIN)}
              >
                {page}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
