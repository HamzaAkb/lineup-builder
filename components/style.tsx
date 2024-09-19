'use client'

import * as React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select' // Import Select components from your custom path
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

// Define types for options
type Option = {
  value: string
  label: string
}

// Define type for Jersey Text options
type JerseyTextOption = 'default' | 'comfortable' | 'compact'

// Define the options for each select input
const fieldColors: Option[] = [
  { value: 'striped-green', label: 'Striped Green' },
  { value: 'cadet-green', label: 'Cadet Green' },
  { value: 'light-green', label: 'Light Green' },
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
]

const formations: Option[] = [
  { value: '4-3-3', label: '4-3-3' },
  { value: '4-4-2', label: '4-4-2' },
  { value: '4-2-3-1', label: '4-2-3-1' },
  { value: '4-1-4-1', label: '4-1-4-1' },
  { value: '4-4-2-diamond', label: '4-4-2 Diamond' },
  { value: '3-5-2', label: '3-5-2' },
  { value: '3-4-3', label: '3-4-3' },
  { value: '4-1-2-1-2-narrow', label: '4-1-2-1-2 Narrow' },
  { value: '4-2-4', label: '4-2-4' },
  { value: '5-3-2', label: '5-3-2' },
  { value: '4-4-1-1', label: '4-4-1-1' },
  { value: '5-4-1', label: '5-4-1' },
  { value: '3-1-4-2', label: '3-1-4-2' },
  { value: 'custom', label: 'Custom' },
]

const playerCounts: Option[] = Array.from({ length: 11 }, (_, i) => ({
  value: String(11 - i),
  label: String(11 - i),
}))

const jerseyStyles: Option[] = [
  { value: 'plain', label: 'Plain' },
  { value: 'vertical-stripes', label: 'Vertical Stripes' },
  { value: 'horizontal-stripes', label: 'Horizontal Stripes' },
  { value: 'circle-fm-style', label: 'Circle - FM Style' },
]

// Define options for Jersey Text using JerseyTextOption type
const jerseyTextOptions: { value: JerseyTextOption; label: string }[] = [
  { value: 'default', label: 'Show Position Names' },
  { value: 'comfortable', label: 'Show Jersey Numbers' },
  { value: 'compact', label: "Don't show text on jersey" },
]

export default function Style() {
  return (
    <div className='md:col-span-3 bg-gray-100 p-4 rounded-md shadow-sm'>
      {/* Heading for Field */}
      <h3 className='text-base font-medium mb-2'>Field</h3>
      {/* Select Dropdown for Field Colors */}
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select a color' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            {fieldColors.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Heading for Formation */}
      <h3 className='text-base font-medium mt-6 mb-2'>
        Formation (or Drag and Drop Players)
      </h3>
      {/* Select Dropdown for Formation Options */}
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select a formation' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Formations</SelectLabel>
            {formations.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Heading for Player Count */}
      <h3 className='text-base font-medium mt-6 mb-2'>Player Count</h3>
      {/* Select Dropdown for Player Count */}
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select player count' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Number of Players</SelectLabel>
            {playerCounts.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Heading for Jersey */}
      <h3 className='text-base font-medium mt-6 mb-2'>Jersey</h3>
      {/* Select Dropdown for Jersey Options */}
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select a jersey style' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Jersey Styles</SelectLabel>
            {jerseyStyles.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Heading for Jersey Text */}
      <h3 className='text-base font-medium mt-6 mb-2'>Jersey Text</h3>
      <RadioGroup defaultValue='comfortable'>
        {jerseyTextOptions.map((option) => (
          <div key={option.value} className='flex items-center space-x-2'>
            <RadioGroupItem value={option.value} id={option.value} />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
