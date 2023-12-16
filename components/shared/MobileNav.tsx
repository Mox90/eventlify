import React from 'react';
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from '../ui/sheet';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import NavItems from './NavItems';

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image
            src={'/assets/icons/menu.svg'}
            width={24}
            height={24}
            alt='menu'
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent
          side={'left'}
          className='bg-white flex md:hidden flex-col gap-6'
        >
          <Image
            src={'/assets/images/logo.svg'}
            width={128}
            height={35}
            alt='logo'
          />
          <Separator className='border border-gray-50' />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
