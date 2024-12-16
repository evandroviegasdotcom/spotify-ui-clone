import data from '@/data'
import Image from 'next/image'
import React from 'react'

export default function Song() {
  return (
    <div className='flex items-center gap-2'>
            <Image src={data.song.cover} width={50} height={50} className='object-cover rounded' alt='Song Cover' />
    <div className='p-3'>
        <span className='block text-sm'>{data.song.name}</span>
        <span className='text-sm text-dimmed'>{data.song.artists}</span>
    </div>
    </div>
  )
}
