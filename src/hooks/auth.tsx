import {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect
} from 'react'

import { api } from '../services/api'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
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

interface SignInRequest {
  email: string
  password: string
}

interface SignUpRequest {
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

interface IAuthContextData {
  user: User
  signIn(data: SignInRequest): Promise<void>
  signUp(data: SignUpRequest): Promise<void>
  signOut(): Promise<void>
  storageLoading: boolean
}

interface ServerResponse {
  user: User
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const [storageLoading, setStorageLoading] = useState(true)

  const userStorageKey = '@colabora-ai:user'

  async function signIn(data: SignInRequest) {
    try {
      const response = await api.post<ServerResponse>('auth', data)

      if (response.data) {
        setUser(response.data.user)

        localStorage.setItem(userStorageKey, JSON.stringify(response.data.user))
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function signUp(data: SignUpRequest) {
    try {
      api.post('users/create', data)
    } catch (err) {
      console.log(err)
    }
  }

  async function signOut() {
    setUser({} as User)
    localStorage.removeItem(userStorageKey)
  }

  useEffect(() => {
    async function loadStoragedData() {
      const userStoraged = localStorage.getItem(userStorageKey)

      if (userStoraged) {
        const parseUserStoraged = JSON.parse(userStoraged) as User
        setUser(parseUserStoraged)
      }

      setStorageLoading(false)
    }

    loadStoragedData()
  }, [userStorageKey])

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
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
