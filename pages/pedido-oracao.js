import React, { useState } from 'react'
import Link from 'next/link'
import PageTitle from '../components/pageTitle'

const PedidosOracao = () => {
  const [form, setForm] = useState({
    Nome: '',
    Cidade: '',
    Pedidos: '',
  })

  const [sucess, setSucess] = useState(false)
  const [ret, setRet] = useState({})

  const save = async () => {
    try {
      const response = await fetch('api/salvar-pedido', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = response.json()
      setSucess(true)
      setRet(data)
      console.log(data)
    } catch { (Error) }
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className='mt-12 mb-12 text-xl'>
      <PageTitle title='Pedidos de Oração' />
      <h1 className='text-center font-bold my-4 text-2xl'>Pedidos de Oração</h1>
      <p className='text-center'>
        Clique no botão abaixo para fazer seu pedido de oração. <br />
        Todos os pedidos serão enviados para os servos do ministério de intercessão do GO LUZ DA FÉ.
      </p>
      {
        !sucess &&
        <div className='mx-auto mt-6'>
          <label className='font-bold'>
            Nome: <br />
            <p className='text-base'>Caso não queira identificar-se, deixar o nome em branco</p>
            <input type='text' className='p-4 block shadow bg-green-300 my-2 rounded mx-auto' name='Nome' onChange={onChange} value={form.Nome} />
          </label>
          <label className='font-bold'>
            Cidade: <br />
            <input type='text' className='p-4 block shadow bg-green-300 my-2 rounded mx-auto' name='Cidade' onChange={onChange} value={form.Cidade} />
          </label> < br />
          <label className='font-bold'>
            Pedido: <br />
            <textarea type='text' className='p-4 block shadow bg-green-300 my-2 rounded mx-auto' name='Pedidos' onChange={onChange} value={form.Pedidos} />
          </label>
          <button className='bg-green-700 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow mt-6 mx-auto' onClick={save}>Enviar</button>
        </div>
      }
      {
        sucess &&
        <div className='text-center border p-4 mb-4'>
          <span className='font-bold block mb-2'>Seu pedido foi enviado, Clique em voltar caso queira fazer mais pedidos</span>
          <br />
          <Link href='/'>
            <a className='bg-green-700 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow text-white'>
              Voltar
          </a>
          </Link>
        </div>
      }
    </div>
  )
}

export default PedidosOracao