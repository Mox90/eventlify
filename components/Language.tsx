'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';

const Language = () => {
  const [lang, setLang] = useState('en');
  const [dir, setDir] = useState('rtl');

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    const newDir = dir === 'rtl' ? 'ltr' : 'rtl';
    setLang(newLang);
    setDir(newDir);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newDir;
  };

  return (
    <Button
      className='hover:bg-transparent top-0 bg-transparent border-none cursor-pointer text-black py-1 shadow-none'
      onClick={toggleLanguage}
    >
      {lang === 'en' ? 'English' : 'عربي'}
    </Button>
  );
};

export default Language;
