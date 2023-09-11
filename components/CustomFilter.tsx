'use client'
import { CustomFilterProps } from '@/types'
import {useState, Fragment} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'

const CustomFilter = ( {title}:CustomFilterProps) => {
  return (
    <div className='text-slate-500'>{title}</div>
  )
}

export default CustomFilter