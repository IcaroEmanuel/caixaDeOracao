import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-green-700 p-4'>
      <div className='container mx-auto text-center text-white text-2xl'>
        Desenvolvido por: Ícaro Emanuel <br />
        <Link href='https://www.instagram.com/icaroemanuel.10/'>
          <a className='px-2 hover:underline' target='blank'>Instagram</a>
        </Link> <br />
        <Link href='https://www.linkedin.com/in/icaroemanuel/'>
          <a className='px-2 hover:underline' target='blank'>Linkedin</a>
        </Link><br />
        Email: icaro.emanuel@outlook.com

      </div>
    </div>
  )
}

export default Footer