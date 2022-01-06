import axios from 'axios'

export const viacepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})
