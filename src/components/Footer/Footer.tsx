'use client'

import { faBackwardStep, faBars, faClose, faForwardStep, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { CvButton } from '@/components';
import { useAppSelector } from '@/lib/store/hooks';

export interface FooterProps {
  className: string;
  onOpenCloseMenu: (open: boolean) => void;
  openCloseMenu : boolean;
}

export default function Footer({
  className,
  onOpenCloseMenu,
  openCloseMenu,
}: FooterProps) {

  const [paused, setPaused] = useState(false);
  const [openModal, setOpenModal] = useState(true);
  const footerState = useAppSelector(state => state.footer.value);

  useEffect(() => setOpenModal(openCloseMenu), [openCloseMenu])

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
    <footer className={"bg-gray-300 grid grid-cols-10 " + className}>
      <article className="ml-5 col-span-2 flex flex-row items-center">
        <p>
          <FontAwesomeIcon
            onClick={() => {
                onOpenCloseMenu(!openModal);
                setOpenModal(!openModal)
              }
            }
            className="cursor-pointer"
            icon={openModal? faClose: faBars}
            size='xl'
          />
        </p>
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