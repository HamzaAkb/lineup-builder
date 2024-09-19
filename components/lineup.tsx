'use client'

import React, { useState } from 'react'
import { Input } from './ui/input'
import Draggable from 'react-draggable'
import Shirt from './shirt' // Assuming you have the Shirt component

export default function Lineup() {
  // Container width for reference
  const containerWidth = 400
  const containerHeight = 600

  // Define initial positions for 4-3-3 formation, including the goalkeeper, centered horizontally
  const initialPositions = [
    // Goalkeeper
    { x: containerWidth / 2 - 25, y: containerHeight - 50 }, // Goalkeeper

    // Defenders
    { x: containerWidth / 4 - 25, y: containerHeight - 150 }, // Left Back
    { x: containerWidth / 2 - 75, y: containerHeight - 150 }, // Left Center Back
    { x: containerWidth / 2 + 25, y: containerHeight - 150 }, // Right Center Back
    { x: (3 * containerWidth) / 4 - 25, y: containerHeight - 150 }, // Right Back

    // Midfielders
    { x: containerWidth / 4 - 25, y: containerHeight - 300 }, // Left Midfielder
    { x: containerWidth / 2 - 25, y: containerHeight - 300 }, // Central Midfielder
    { x: (3 * containerWidth) / 4 - 25, y: containerHeight - 300 }, // Right Midfielder

    // Forwards
    { x: containerWidth / 4 - 25, y: containerHeight - 450 }, // Left Forward
    { x: containerWidth / 2 - 25, y: containerHeight - 450 }, // Center Forward
    { x: (3 * containerWidth) / 4 - 25, y: containerHeight - 450 }, // Right Forward
  ]

  const [shirts, setShirts] = useState<number[]>(
    Array.from({ length: 11 }, (_, i) => i) // Array to represent 11 shirts (including goalkeeper)
  )

  return (
    <div className='md:col-span-6 bg-white p-4 rounded-md shadow-sm'>
      {/* Title and Input Field on the same line */}
      <div className='flex items-center justify-between mb-4'>
        <Input
          type='text'
          placeholder='Lineup Name'
          className='w-[60%] p-2 border border-gray-300 rounded-md'
        />
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors duration-300'>
          Download Image
        </button>
      </div>

      {/* Draggable Container with Background Image */}
      <div
        className='relative w-full h-[600px] border border-gray-300 rounded-md overflow-hidden'
        style={{
          backgroundImage: `url('./stripped.png')`, // Correct path for the image in the same directory
          backgroundSize: 'cover', // Make sure the background covers the container
          backgroundPosition: 'center', // Center the background
          backgroundRepeat: 'no-repeat', // Prevent the background from repeating
        }}
      >
        {shirts.map((shirt, index) => (
          <Draggable
            key={index}
            bounds='parent'
            defaultPosition={{
              x: initialPositions[index].x,
              y: initialPositions[index].y,
            }} // Set initial positions
          >
            <div className='absolute w-[50px] h-[50px] flex items-center justify-center cursor-move'>
              <Shirt baseColor='red' secondaryColor='white' style='plain' />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  )
}
