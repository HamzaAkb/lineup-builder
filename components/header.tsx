export default function Header() {
  return (
    <header className='py-4 bg-white shadow-md border-b border-gray-200'>
      <div className='container mx-auto px-4 lg:px-6 max-w-[1200px] flex flex-col lg:flex-row items-center justify-between'>
        {/* Heading on the left */}
        <div className='flex-1 mb-4 lg:mb-0 w-full lg:w-auto text-center lg:text-left'>
          <h1 className='text-2xl lg:text-3xl font-semibold text-gray-800'>
            Lineup Builder
          </h1>
        </div>
        {/* Navigation buttons in the center */}
        <nav className='flex-1 w-full lg:w-auto'>
          <ul className='flex flex-col lg:flex-row items-center justify-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-10'>
            <li className='relative group'>
              <span className='cursor-pointer text-lg font-semibold text-gray-600 group-hover:text-blue-600 transition-colors duration-300'>
                Create Formation
              </span>
              <span className='absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group'>
              <span className='cursor-pointer text-lg font-semibold text-gray-600 group-hover:text-blue-600 transition-colors duration-300'>
                Articles
              </span>
              <span className='absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group'>
              <span className='cursor-pointer text-lg font-semibold text-gray-600 group-hover:text-blue-600 transition-colors duration-300'>
                Lineups
              </span>
              <span className='absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative group'>
              <span className='cursor-pointer text-lg font-semibold text-gray-600 group-hover:text-blue-600 transition-colors duration-300'>
                Contact
              </span>
              <span className='absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full'></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
