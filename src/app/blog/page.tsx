'use client'

import InConstruction from '@/components/InConstruction/InConstruction';
import { setComponent } from '@/lib/store/features/footer/footerSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import React, { useEffect } from 'react';

export default function Blog() {

  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(setComponent('')) }, [])

  return (
    <main>
      <InConstruction/>
    </main>
  )
}