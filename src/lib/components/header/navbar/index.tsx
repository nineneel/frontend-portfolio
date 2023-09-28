import Link from 'next/link';

export default function NavBar({ onClick }: { onClick: () => void }) {
  return (
    <>
      <div className='absolute z-40 flex h-16 w-full items-stretch justify-between border-y-2 border-dark bg-background bg-noice'>
        {/* Menu Button */}
        <div className='flex md:flex-1' onClick={onClick}>
          <div className='flex items-center justify-center gap-2 border-r-2 border-dark px-6 hover:cursor-pointer md:px-12'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='12'
              viewBox='0 0 18 12'
              fill='none'
            >
              <path
                d='M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z'
                fill='black'
              />
            </svg>
            <h4 className='hidden md:block'>MENU</h4>
          </div>
        </div>

        {/* Title / Icon */}
        <div className='flex flex-1 items-center justify-center'>
          <Link href='/'>
            <h2 className='text-2xl'>nineneel.</h2>
          </Link>
        </div>

        {/* Contact Button */}
        <div className='hidden flex-1 items-center justify-end pr-12 md:flex'>
          {/* TODO: create button component use below style */}
          <div className='rounded-sm bg-dark px-5 py-2 text-sm font-medium text-ligth'>
            Contact
          </div>
        </div>
      </div>
    </>
  );
}
