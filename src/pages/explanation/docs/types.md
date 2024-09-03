## Tipagens

As tipagens facilitam, e muito, a nossa vida na hora de desenvolver. Elas garantem
que saibamos exatamente o que esperar de alguma variável, função, requisição, etc...

Por isso, elas também tem seu lugar especial nessa arquitetura.

Cada módulo possui as tipagens de suas entidades, propriedades esperadas para
requisições e resposta das requisições. Calma, é fácil, segue o exemplo:

### Estrutura do Módulo de Usuários

```
  - 📂 user
    - 📂 services
      - 📄user-service.ts
    - 📂 types
      - 📄user.ts
      - 📄get-user.ts
    - 📁 hooks
    - 📁 utils
```

Agora observe a estrutura de cada arquivo de tipagem:

 - A tipagem dentro de user.ts deve possuir apenas a entidade do módulo
 - Ela serve para ser utilizada sempre que algo possua essa entidade

```
user.ts

export interface User {
  name: string
  birthDate: Date
  email: string
}
```

 - A demais tipagens dentro da pasta types do módulo usuário, devem
 possuir o nome das suas funções dentro dos services.
 - Ela serve para mostrar o que deve ser passado para seu service e o que
 será retornado do seu service

```
import { User } from './user'

export interface GetUserProps {
  id: string
}

export GetUserResponse extends User {}
```

- A tipagem GetUserProps mostra exatamente o que deve ser passado para a função
getUserProps para que a requisição funcione.
- A tipagem GetUserResponse mostra exatamente o que vai ser retornado da função
getUserProps.