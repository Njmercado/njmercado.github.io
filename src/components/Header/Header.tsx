'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { URL } from '@/constants/urls.constant';
import { IGeneral } from '@/interfaces/general.interface';
import { PAGES } from '@/constants/general.constant';

export interface HeaderProps extends IGeneral {
  onClick?: () => void;
}

export default function Header({
  className,
  onClick,
}: HeaderProps) {
  const [pathname, setPathname] = useState<string>('')
  const router = useRouter()

  useEffect(() => { setPathname(window.location.pathname) }, [])

  const goTo = (page: string) => router.push(URL[page.toUpperCase()].MAIN)

  const isActualPage = (page: string) => pathname === URL[page.toUpperCase()].MAIN

  return (
    <nav className={"text-4xl bg-gray-500 flex flex-col justify-center p-4 pl-8 " + className}>
      <ul style={{ marginLeft: "20%" }} className='gap-2 grid'>
        {
          PAGES.map((page: string, index: any) => (
            <li key={index} className={`transition-all ${isActualPage(page)? "before:border-l-4 before:border-l-black before:mr-2": 'hover:translate-x-3'}`}>
              <a
                className="cursor-pointer" 
                onClick={() => {
                  onClick?.();
                  goTo(page)
                  setPathname(URL[page.toUpperCase()].MAIN)
                }}
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
