// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { viacepApi } from '../../services/viacepApi'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cep } = req.body

  const viaCepUrl = `${cep}/json/`

  const { data: viaCepReaponse } = await viacepApi.get(viaCepUrl)

  return res.status(200).json(viaCepReaponse)
}
