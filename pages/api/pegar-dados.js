import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENTE_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const sheetConfig = doc.sheetsByIndex[2] //Index da planilha que quero acessar, retorna um array
    await sheetConfig.loadCells('A2:B2') //Células que desejo carregar pra pegar os dados


    const mostrarVersiculo = sheetConfig.getCell(1, 0) //Pegando o valor da linha de index 2/coluna index 0


    const versiculo = sheetConfig.getCell(1, 1) //Pegando o valor da linha de index 2/coluna index 1

    res.end(JSON.stringify({
      mostrarVersiculo: mostrarVersiculo.value === 'verdadeiro',
      versiculo: versiculo.value
    }))
  }
  catch (err) {
    res.end(JSON.stringify({
      mostrarVersiculo: false,
      versiculo: ''
    }))
  }
}