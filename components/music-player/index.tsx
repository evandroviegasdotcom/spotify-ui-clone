import React from 'react'
import Song from './song'
import Controls from './controls'
import Config from './config'

export default function MusicPlayer() {
  return (
    <div className='flex items-center justify-between'>
      <Song />
      <Controls />
      <Config />
    </div>
  )
}
