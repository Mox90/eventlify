'use client';
import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className='md:flex-between flex w-full flex-col items-start md:gap-5 md:flex-row'>
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.label}
            className={`${
              isActive && 'bg-primary-500 text-white'
            } p-medium-16 px-4 py-2 w-full whitespace-nowrap rounded-r-full md:rounded-full md:flex-center`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
