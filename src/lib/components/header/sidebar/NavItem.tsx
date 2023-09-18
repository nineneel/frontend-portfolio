import Link from 'next/link';

export enum NavItemType {
  SMALL = 'small',
  NORMAL = 'normal',
}

export default function NavItem({
  title,
  href,
  toggle,
  type,
}: {
  title: string;
  href: string;
  type?: NavItemType;
  toggle?: () => void;
}) {
  if (type === NavItemType.SMALL) {
    return (
      <li className='w-full py-2'>
        <Link
          href={href}
          className='text-xl font-medium uppercase'
          onClick={toggle}
        >
          {title}
        </Link>
      </li>
    );
  }

  // return normal if type is null or normal
  return (
    <li className='w-full py-4'>
      <Link
        href={href}
        className='text-2xl font-medium uppercase'
        onClick={toggle}
      >
        {title}
      </Link>
    </li>
  );
}
