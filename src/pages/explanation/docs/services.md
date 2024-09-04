## Services

Os services são as camadas responsáveis por toda a comunicação com o backend. Cada função dentro dos services é projetada para realizar uma operação específica, como buscar dados, enviar formulários ou atualizar registros. A responsabilidade dos services é limitada à execução de chamadas HTTP e ao tratamento básico de respostas, deixando a lógica de negócios e manipulação de estado para os hooks.

### Antes do Service Base

Para que o service funcione, precisamos criar algumas funções que auxiliem na comunicação com o backend.

#### API com Axios

```
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

export const api = axios.create({
  baseURL: baseUrl,
})

```

#### Cache na memória do browser

```
const cache = new Map()

export function hasInCache(key: string) {
  return cache.has(key)
}

export function setInCache(key: string, value: any) {
  cache.set(key, [value, Date.now()])
}

export function getForCache(key: string) {
  return cache.get(key) ? cache.get(key)[0] : undefined
}

export function deleteForCache(key: string) {
  cache.delete(key)
}

export function clearCache() {
  cache.clear()
}

export function cacheIsExpired(key: string, seconds = 1000) {
  const entry = cache.get(key)
  if (!entry) {
    return true
  }

  const [, timestamp] = entry
  return (Date.now() - timestamp) / 1000 > seconds
}


```

#### E por fim, o Service Base

```
import { AxiosResponse } from 'axios'
import { api } from './api'
import {
  clearCache,
  cacheIsExpired,
  hasInCache,
  setInCache,
  getForCache,
} from './cache'

type RequestProps = {
  url: string
  method?: 'get' | 'post' | 'put' | 'delete'
  body?: any
  params?: any
  cacheTime?: number
}

type Respose<T> = {
  code: number
  data: T
}

export async function request<T>({
  url,
  method = 'get',
  body,
  params,
  cacheTime = 30,
}: RequestProps): Promise<Respose<T>> {
  const query = {}
  let axiosResponse: AxiosResponse

  const key = `${url} + ${params ? JSON.stringify(params) : null} + ${method}`

  if (['post', 'put', 'delete'].includes(method)) {
    clearCache()
  }

  if (method === 'get') {
    Object.assign(query, { params })
  }

  if (method === 'post' || method === 'put') {
    Object.assign(query, body)
  }

  if (!hasInCache(key) || cacheIsExpired(key, cacheTime)) {
    axiosResponse = await api[method](url, query)

    setInCache(key, axiosResponse)
  }

  axiosResponse = getForCache(key)

  if (!axiosResponse) return

  return {
    code: axiosResponse.status,
    data: axiosResponse.data,
  }
}

```


Observe que o service base é uma função que recebe uma URL, um método, um corpo e parâmetros, e retorna uma resposta da API.

Agora, vamos criar o service base para o módulo de usuários. Que será nosso exemplo de um service de módulo.

```
import { request } from '@/core/services/request'
export async function getUsers(params: GetUsersProps) {
  return await request<GetUsersResponse>({
    url: `/user`,
    method: 'get',
    query: params,
  })
}
```

Observe como é simples realizar uma requisição aproveitando o service base que criamos.

Basta passar o método, url, parâmetros e corpo da requisição. As tipagens são passadas no parâmetro
e resposta da função, garantindo que sempre que essa função for chamada, o desenvolvedor saiba o que
precisa passar e o que vai receber.
