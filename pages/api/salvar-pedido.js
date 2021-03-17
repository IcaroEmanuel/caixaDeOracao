import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

const gerarData = () => {
  const data = new Date()
  const dia = data.getDate()
  const mes = (data.getMonth() + 1)
  const ano = (data.getFullYear())

  let dataAtual = `${dia}/${mes}/${ano} `
  return dataAtual
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENTE_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)

    })
    await doc.loadInfo()

    const pedidosOracao = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    await pedidosOracao.addRow({
      Nome: data.Nome,
      Cidade: data.Cidade,
      Pedidos: data.Pedidos,
      Data: gerarData()
    })
    res.end(req.body)
  }
  catch (err) {
    console.log(err)
    res.end('erro')
  }
}