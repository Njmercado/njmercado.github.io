'use client'

import React from 'react';
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
  const router = useRouter()

  const goTo = (page: string) => router.push(URL[page.toUpperCase()].MAIN)

  return (
    <nav className={"text-4xl bg-gray-500 flex flex-col justify-center p-4 pl-8 " + className}>
      <ul style={{ marginLeft: "20%" }} className='gap-2 grid'>
        {
          PAGES.map((page: string, index: any) => (
            <li key={index}>
              <a
                className="cursor-pointer" 
                onClick={() => {
                  onClick?.();
                  goTo(page)}
                }
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
