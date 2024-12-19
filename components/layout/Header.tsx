"use client";

import React from 'react';
import LogoIcon from "@/public/assets/logo.svg";
import MenuIcon from "@/public/assets/icons/icon-menu.svg";

import { Button } from "@/components/ui/Button";

const Header = () => {
  return (
    <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10'>
        <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
        <div className='container'>
            <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative'>
                <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
                <div>
                    <div className='border size-10 rounded-lg inline-flex justify-center items-center border-white/15'>
                        <LogoIcon className="size-8" aria-label="Logo" />
                    </div>
                </div>

                <div className='hidden md:block'>
                    <nav className='flex gap-8 text-sm'>
                        <a href="#" className='text-white/70 hover:text-white transition'>
                            Features
                        </a>
                        <a href="#" className='text-white/70 hover:text-white transition'>
                            Developers
                        </a>
                        <a href="#" className='text-white/70 hover:text-white transition'>
                            Pricing
                        </a>
                        <a href="#" className='text-white/70 hover:text-white transition'>
                            Changelog
                        </a>
                    </nav>
                </div>

                <div className='flex gap-4 items-center'>
                    <Button>Join waitlist</Button>
                    <MenuIcon className='md:hidden' aria-label="Menu" />
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;