import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';
import Language from '../Language';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex justify-between items-center'>
        <Link href={'/'} className='w-36'>
          <Image
            src={'/assets/images/logo.svg'}
            alt='logo'
            width={128}
            height={40}
          />
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>

        <div className='flex w-32 justify-end gap-3'>
          <Language />
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size={'lg'}>
              <Link href={'/sign-in'}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
