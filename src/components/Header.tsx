import Link from 'next/link';

const Header = () => {
  return (
    <header className='h-24 bg-primary flex items-center'>
      <div className="container">
        <div className='flex items-center'>
          <Link href={'/'} className="text-2xl font-bold text-white">
            <strong>DevToolHub</strong>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
