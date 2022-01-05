// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { usersStorage } from '../../../data/users'

export type User = {
  cep: string
  city: string
  cpfCnpj: string
  email: string
  name: string
  password: string
  publicPlace: string
  state: string
  userType: string
}

export default function createUserHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    cep,
    city,
    cpfCnpj,
    email,
    name,
    password,
    publicPlace,
    state,
    userType
  } = req.body

  const findUser = usersStorage.filter((user) => user.email === email)

  if (findUser.length !== 0) {
    return res.status(401).json({ message: 'User already exists.' })
  }

  const user = {
    cep,
    city,
    cpfCnpj,
    email,
    name,
    password,
    publicPlace,
    state,
    userType
  }

  usersStorage.push(user)

  return res.status(200).json(user)
}
