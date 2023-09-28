import Link from 'next/link';
import NavItem, { NavItemType } from './NavItem';

export default function SideBar({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <>
      <div
        className={`absolute top-0 z-50 flex h-screen w-full transition-all ${
          isOpen ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <nav className='flex h-full bg-background px-12 py-8'>
          <div className='items-left flex w-full flex-col justify-between'>
            <ul className='flex flex-col'>
              <NavItem href='/' toggle={onClick} title='Home' />
              <NavItem href='/work' toggle={onClick} title='Work' />
              <NavItem
                href='/mini-project'
                toggle={onClick}
                title='Mini Project'
              />
            </ul>

            {/* Social Media */}
            <div className='flex flex-col items-start'>
              <h4 className='mb-5 text-base font-light uppercase'>
                Social Media
              </h4>
              <ul className='flex flex-col'>
                <NavItem
                  href='/'
                  toggle={onClick}
                  title='Instagram'
                  type={NavItemType.SMALL}
                />
                <NavItem
                  href='/'
                  toggle={onClick}
                  title='Linkedin'
                  type={NavItemType.SMALL}
                />
                <NavItem
                  href='/'
                  toggle={onClick}
                  title='Github'
                  type={NavItemType.SMALL}
                />
              </ul>
              <div className='mt-4 w-full rounded-sm border border-dark px-5 py-2 text-center text-base text-dark'>
                Contact
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`flex h-full w-full flex-1 bg-dark/50 opacity-${
            isOpen
              ? '1 transition-all duration-500'
              : '0 transition-opacity duration-500'
          }`}
          onClick={onClick}
        ></div>
      </div>
    </>
  );
}
