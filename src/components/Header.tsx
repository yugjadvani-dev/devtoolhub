"use client";
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <header className='py-4 bg-primary flex items-center w-full'>
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
