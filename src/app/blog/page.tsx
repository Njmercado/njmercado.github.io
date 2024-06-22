'use client'

import { setComponent } from '@/lib/store/features/footer/footerSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import React, { useEffect } from 'react';

export default function Blog() {

  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(setComponent('')) }, [])

  return (
    <div>hola desde blog</div>
  )
}