"use client";
import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-24 bg-primary flex items-center'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <Link href={'/'} className="text-2xl font-bold text-white">
            <strong>DevToolHub</strong>
          </Link>

          <Link href={'/css-minify'} className='font-medium text-white underline underline-offset-4'>CSS Minify</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
