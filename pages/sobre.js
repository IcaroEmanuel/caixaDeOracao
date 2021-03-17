import React from 'react'
import Link from 'next/link'

const Sobre = () => {
  return (
    <div>
      <h1>Aplicativo criado para que mais pessoas possam enviar possam enviar pedidos de oração para que sejam acolhidos e levados a Deus por um grupo de intercessores</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/Contato'>
          <a>Contato</a>
        </Link>
      </div>
    </div>
  )
}

export default Sobre