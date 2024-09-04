## Páginas

Cada página do projeto utiliza os hooks e services específicos de um ou mais módulos para renderizar a interface de usuário e interagir com o backend. A modularidade garante que cada página possa ser desenvolvida e mantida de forma isolada, com dependências bem definidas e claras. Isso facilita a adição de novas funcionalidades ou a modificação de existentes, sem risco de impactar outras partes da aplicação.

A página não deve conter lógica de negócios, apenas a lógica de apresentação.

### Exemplo

```
import { useUsers } from '@/modules/user'

export function Users() {
  const { users, handleGetUsers } = useUsers()

  return (
    <div>
      <h1>Usuários</h1>
      <button onClick={handleGetUsers}>Buscar Usuários</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

```

Seguindo o objetivo de reutilização de código, se existir necessidade de mostrar uma
lista de usuários em outra página, basta seguir o mesmo padrão, utilizando o hook já existente
sem a necessidade de criar um novo hook ou uma nova lógica de negócios.

```
export function UserDetails() {
  const { users, handleGetUsers } = useUsers()

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
```
