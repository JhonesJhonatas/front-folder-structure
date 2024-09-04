## Hooks

Os hooks servem como intermediários entre os services e os componentes de interface. Eles são responsáveis por invocar os services, gerenciar estados como loading e errors, e aplicar regras de negócio. Essa separação de responsabilidades facilita o teste de unidades e a reutilização de lógica em diferentes partes do sistema. Além disso, os hooks são projetados para serem intuitivos, permitindo que os desenvolvedores se concentrem mais na lógica da aplicação do que na gestão do estado ou na manipulação direta de respostas de API.

### Exemplo de um Hook

```
import { useCallback, useState } from 'react'

import { GetUsersProps, getUsers, User } from '@/modules/user'
import { useToast } from '@components'

export const useSearchClients = () => {
  const { addToast } = useToast()

  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const handleGetUsers = useCallback(
    async (props: GetUsersProps) => {
      setLoading(true)
      try {
        const { data } = await getUsers(props)

        setUsers(data)
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao buscar clientes',
        })
      } finally {
        setLoading(false)
      }
    },
    [addToast],
  )

  return {
    loading,
    users,
    handleGetUsers,
  }
}

```

### Explicação

Observe que sempre que for necessário buscar a lista de clientes basta chamar o hook e utilizar sua função.

Isso poupa tempo de desenvolvimento e evita a necessidade de repetir a mesma lógica em diferentes partes do código.
