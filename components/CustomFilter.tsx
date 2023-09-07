import { CustomFilterProps } from '@/types'
import React from 'react'

const CustomFilter = ( {title}:CustomFilterProps) => {
  return (
    <div className='text-slate-500'>{title}</div>
  )
}

export default CustomFilter