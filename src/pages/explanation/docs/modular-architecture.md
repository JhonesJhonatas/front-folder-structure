## Arquitetura Modular

A arquitetura do projeto é modular, com cada módulo representando uma entidade do banco de dados. Esta estrutura promove uma organização intuitiva e uma maior reutilização de código, tornando mais simples a gestão e evolução do projeto. Cada módulo contém:

- **Services**: Funções responsáveis por todas as chamadas para o backend, encapsulando a lógica de acesso a dados e a comunicação com APIs.

- **Hooks**: Custom hooks que utilizam os services para lidar com a lógica de estado, tratamento de erros, e regras de negócios.

- **Types**: Definições de tipos específicos para cada módulo, garantindo que as interações entre diferentes partes do sistema sejam seguras e previsíveis.

- **Utils**: Funções utilitárias que oferecem suporte às operações dentro de cada módulo, como formatação de dados ou cálculos específicos.

```sh
mkdir docs && touch docs/hello.mdx
```