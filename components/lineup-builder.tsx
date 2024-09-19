'use client'

import { Input } from './ui/input'
import * as React from 'react'
import Style from './style'
import Shirt from './shirt'
import Draggable from 'react-draggable'
import Lineup from './lineup'

export default function LineupBuilder() {
  return (
    <div className='container mx-auto px-4 lg:px-6 max-w-[1200px] py-8'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
        <Style />
        <Lineup />
        {/* Right Column - 30% width */}
        <div className='md:col-span-3 bg-gray-100 p-4 rounded-md shadow-sm'>
          <h2 className='text-lg font-semibold mb-4'>Right Column</h2>
          <p>This column takes 30% width on large screens.</p>
        </div>
      </div>
    </div>
  )
}
