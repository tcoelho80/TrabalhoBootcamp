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
  id: number
  username: string
  email: string
  name: string
}

interface IAuthContextData {
  user: User
  signIn(data: SignInRequest): Promise<void>
  signOut: () => Promise<void>
  storageLoading: boolean
}

interface SignInRequest {
  username: string
  password: string
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
