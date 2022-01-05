import React, { useContext, useState, createContext, ReactNode } from 'react'
import { api } from '../services/api'
import { useEffect } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface Usuario {
  id: number
  username: string
  email: string
  name: string
}

interface IAuthContextData {
  usuario: Usuario
  signIn(data: SignInRequest): Promise<void>
  signOut: () => Promise<void>
  storageLoading: boolean
}

interface SignInRequest {
  username: string
  password: string
}

interface ServerResponse {
  usuario: Usuario
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<Usuario>({} as Usuario)

  const [storageLoading, setStorageLoading] = useState(true)

  const userStorageKey = '@colabora-ai:usuario'

  async function signIn(data: SignInRequest) {
    const response = await api.post<ServerResponse>('auth', data)

    console.log(response)

    if (response.data) {
      setUser(response.data.usuario)

      localStorage.setItem(
        userStorageKey,
        JSON.stringify(response.data.usuario)
      )
    }
  }

  async function signOut() {
    setUser({} as Usuario)
    localStorage.removeItem(userStorageKey)
  }

  useEffect(() => {
    async function loadStoragedData() {
      const userStoraged = localStorage.getItem(userStorageKey)

      if (userStoraged) {
        const parseUserStoraged = JSON.parse(userStoraged) as Usuario
        setUser(parseUserStoraged)
      }

      setStorageLoading(false)
    }

    loadStoragedData()
  }, [userStorageKey])

  return (
    <AuthContext.Provider
      value={{
        usuario: user,
        signIn,
        signOut,
        storageLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
