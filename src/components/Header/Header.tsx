'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { URL } from '../../constants/urls.constant';

export default function Header(props: any) {
  const router = useRouter()
  return (
    <nav className={"text-2xl bg-gray-500 flex flex-col justify-center p-4 pl-8 " + props.className}>
      <ul>
        <li>
          <a onClick={() => router.push(URL.HOME.MAIN)}>Home</a>
        </li>
        <li>
          <a onClick={() => router.push(URL.PROJECT.MAIN)}>Projects</a>
        </li>
        <li>
          <a onClick={() => router.push(URL.ABOUT.MAIN)}>About me</a>
        </li>
        <li>
          <a onClick={() => router.push(URL.BLOG.MAIN)}>Blog</a>
        </li>
        <li>
          <a onClick={() => router.push(URL.CONTACT.MAIN)}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
