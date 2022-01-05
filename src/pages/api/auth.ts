// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  id: number
  name: string
  username: string
  email: string
}

const users = [
  {
    id: 1,
    name: 'Usuário #1',
    username: 'usuario1',
    email: 'usuario1@teste.com',
    password: '123456'
  },
  {
    id: 2,
    name: 'Usuário #2',
    username: 'usuario2',
    email: 'usuario2@teste.com',
    password: '123456'
  },
  {
    id: 3,
    name: 'Usuário #3',
    username: 'usuario3',
    email: 'usuario3@teste.com',
    password: '123456'
  },
  {
    id: 4,
    name: 'Usuário #4',
    username: 'usuario4',
    email: 'usuario4@teste.com',
    password: '123456'
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body

  const findUser = users.filter((user) => user.username === username)

  if (!findUser[0]) {
    return res.status(401).json({ message: `User don't exists.` })
  }

  const user = findUser[0]

  if (user.password !== password) {
    return res.status(401).json({ message: `Wrong password.` })
  }

  return res.status(200).json({ user })
}
