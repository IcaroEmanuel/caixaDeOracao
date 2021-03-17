import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className='bg-green-600 p-4 shadow-md'>
        <div className='container mx-auto text-center'>
          <Link href='/'>
            <a>
              <img src='/no-back-logo-red.png' alt='Caixinha de Oração' className='mx-auto' />
              <h1 className='text-white text-2xl'>Caixinha de oração</h1>
            </a>
          </Link>
        </div>
      </div>
      <div className='bg-green-700 p-4 shadow-md text-white text-2xl text-center'>
        <Link href='/sobre'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header