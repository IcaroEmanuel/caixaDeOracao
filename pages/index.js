import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pageTitle'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/pegar-dados', fetcher)
  return (
    <div className='mb-12 text-xl'>
      <PageTitle title='Home' />
      <p className='mt-12 text-center'>
        Clique no botão abaixo para fazer seu pedido de oração. <br />
        Todos os pedidos serão enviados para os servos do ministério de intercessão do GO LUZ DA FÉ.
      </p>
      <div className='my-12 text-center'>
        <Link href='/pedido-oracao'>
          <a className='bg-green-700 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow text-white'>
            Faça seu pedido de oração
          </a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.mostrarVersiculo &&
        <p className='my-12 text-center'>
          {data.versiculo}
          {console.log(data.versiculo)}
        </p>
      }
    </div>
  )
}

export default Index