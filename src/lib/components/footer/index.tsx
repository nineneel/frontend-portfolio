import Link from 'next/link';

export default function Footer() {
  return (
    <div className='flex w-full flex-col items-center border-y-2 border-dark'>
      <div className='px-6 py-8 md:px-12'>
        <h2 className='text-xl'>nineneel.</h2>
      </div>
      <ul className='flex w-full justify-stretch'>
        <li className='flex w-full items-center border-x border-y-2 border-dark px-4 py-4'>
          <Link href='/' className='w-full text-center'>
            Home
          </Link>
        </li>
        <li className='flex w-full items-center border-x border-y-2 border-dark px-4 py-4'>
          <Link href='/' className='w-full text-center'>
            Home
          </Link>
        </li>
        <li className='flex w-full items-center border-x border-y-2 border-dark px-4 py-4'>
          <Link href='/' className='w-full text-center'>
            Home
          </Link>
        </li>
      </ul>
      <div className='px-6 py-6 md:px-12'>
        <h2 className='text-base font-bold'>&copy; 2023 nineneel.</h2>
      </div>
    </div>
  );
}
