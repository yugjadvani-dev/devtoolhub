"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className='py-4 bg-primary flex items-center w-full sticky top-0 z-10'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <Link href={'/'} className="text-2xl font-bold text-white">
            <strong>DevToolHub</strong>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button className='md:hidden block'><Menu /></Button>
            </SheetTrigger>
            <SheetContent>
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
