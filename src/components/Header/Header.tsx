'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Header(props: any) {
  const router = useRouter()
  return (
    <div className={"bg-gray-500 flex flex-col justify-center p-4 " + props.className}>
      <div className='ml-4 text-2xl'>
        <div onClick={() => router.push('/')}>Home</div>
        <div onClick={() => router.push('/project')}>Projects</div>
        <div onClick={() => router.push('/about')}>About me</div>
        <div onClick={() => router.push('/blog')}>Blog</div>
        <div onClick={() => router.push('/contact')}>Contact</div>
      </div>
    </div>
  )
}
