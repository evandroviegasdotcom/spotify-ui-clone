import React from 'react'
import { CgExpand, CgMiniPlayer, CgMusicSpeaker } from 'react-icons/cg'
import { GoVideo } from 'react-icons/go'
import { HiOutlineQueueList } from 'react-icons/hi2'
import { TbMicrophone2, TbVolume } from 'react-icons/tb'

export default function Config() {
  return (
    <div className='flex items-center gap-3 text-xl text-dimmed'>
        <GoVideo />
        <TbMicrophone2 />
        <HiOutlineQueueList />
        <CgMusicSpeaker />
        <TbVolume />
        <div className='w-[60px] h-[3px] rounded-full bg-white' />
        <CgMiniPlayer />
        <CgExpand />
    </div>
  )
}
