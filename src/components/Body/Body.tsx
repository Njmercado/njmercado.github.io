'use client';

import {
  Header,
  Footer
} from '@/components'
import { isSmallScreen } from '@/utils/width';
import { useEffect, useState } from 'react'

export interface BodyProps {
  children: any
}

export default function Body({
  children
}: BodyProps) {

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => setOpenModal(!isSmallScreen()), [])

  const handleClick = () => {
    if(isSmallScreen()) {
      setOpenModal(false);
    }
  }

  return (
    <body className="font-mono text-xl">
      <div className="grid grid-rows-10 h-screen">
        <div className="inline-flex row-span-9">
          <div className={`transition-all h-full ${openModal? 'xs:w-full sm:w-full md:w-full lg:w-4/12 xl:w-3/12': 'w-0'}`}>
            <Header onClick={handleClick} className={"h-full"}/>
          </div>
          <main
            id="informationContainer"
            className={`
                bg-gray-100 flex flex-col justify-center items-center
                ${openModal? 'xs:w-0 sm:w-0 md:w-0 lg:w-8/12 xl:w-9/12': 'w-full'}
                overflow-auto
            `}
          >
            <div className="
              overflow-auto h-auto py-10 px-4
              xs:w-11/12 sm:w-11/12 md:w-8/12 lg:w-8/12 xl:w-8/12
            ">
              {children}
            </div>
          </main>
        </div>
        <Footer openCloseMenu={openModal} onOpenCloseMenu={(open: boolean) => setOpenModal(open)} className="row-span-1" />
      </div>
    </body>
  )
}