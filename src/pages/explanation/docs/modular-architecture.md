## Arquitetura Modular

A arquitetura do projeto é modular, com cada módulo representando uma entidade do banco de dados. Esta estrutura promove uma organização intuitiva e uma maior reutilização de código, tornando mais simples a gestão e evolução do projeto. Cada módulo contém:

- **Services**: Funções responsáveis por todas as chamadas para o backend, encapsulando a lógica de acesso a dados e a comunicação com APIs.

- **Hooks**: Custom hooks que utilizam os services para lidar com a lógica de estado, tratamento de erros, e regras de negócios.

- **Types**: Definições de tipos específicos para cada módulo, garantindo que as interações entre diferentes partes do sistema sejam seguras e previsíveis.

- **Utils**: Funções utilitárias que oferecem suporte às operações dentro de cada módulo, como formatação de dados ou cálculos específicos.

## Reutilização de Hooks

```
   módulo core --> módulo user --┐
                  ┌--hook de listar usuarios--┐
          Página Dashboard       Página Listagem de Usuários
```

No exemplo acima você pode ver que o hook dentro do módulo de Usuários só precisaram ser escritos uma vez,
apesar de ser utilizado em mais de uma página.

## Reutilização de Tipagens

```
   módulo core --> módulo de endereço                               ┌--módulo de contatos
                        └-- tipagem de endereço --┐       ┌--tipagem de contatos
                    Módulo de usuários -->  Tipagem de Usuário
```

Como cada módulo atua como uma entidade, você tipa cada módulo e pode aproveita-lo em outro módulo caso
necessário, evitando a reescrita de tipagens. Além de garantir que qualquer pessoa saiba onde acha-la.

```js
import { Address } from '@/src/modules/address/types/address'
import { UserProfile } from '@/src/modules/user-profile/types/user-profile'
import { Provider } from '@/src/modules/provider/types/provider'

export type User = {
  id: string
  email: string
  role: 'admin' | 'provider' | 'client' | 'secretary' | 'rh'
  avatar?: string
  created_at: string
  updated_at: string
  addresses?: Address[]
  user_profile?: UserProfile
  provider: Provider
}
```