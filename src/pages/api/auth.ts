// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { usersStorage } from '../../data/users'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const findUser = usersStorage.filter((user) => user.email === email)

  if (!findUser[0]) {
    return res.status(401).json({ message: `User don't exists.` })
  }

  const user = findUser[0]

  if (user.password !== password) {
    return res.status(401).json({ message: `Wrong password.` })
  }

  return res.status(200).json({ user })
}
