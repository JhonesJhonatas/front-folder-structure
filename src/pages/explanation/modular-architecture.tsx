import { Divider } from '@/components'

import { Documentation } from './components/documentation'

export function ModularArchitecture() {
  return (
    <Documentation>
      <Documentation.Title>Arquitetura Modular</Documentation.Title>
      <Divider />
      <Documentation.SubTitle>
        Organização é a Chave para a Escalabilidade
      </Documentation.SubTitle>
      <Documentation.Text>
        A arquitetura do projeto é modular, com cada módulo representando uma
        entidade do banco de dados. Esta estrutura promove uma organização
        intuitiva e uma maior reutilização de código, tornando mais simples a
        gestão e evolução do projeto. Cada módulo contém:
      </Documentation.Text>
      <ul>
        <li>
          Services: Funções responsáveis por todas as chamadas para o backend,
          encapsulando a lógica de acesso a dados e a comunicação com APIs.
        </li>
        <li>
          Hooks: Custom hooks que utilizam os services para lidar com a lógica
          de estado, tratamento de erros, e regras de negócios.
        </li>
        <li>
          Types: Definições de tipos específicos para cada módulo, garantindo
          que as interações entre diferentes partes do sistema sejam seguras e
          previsíveis.
        </li>
        <li>
          Utils: Funções utilitárias que oferecem suporte às operações dentro de
          cada módulo, como formatação de dados ou cálculos específicos.
        </li>
      </ul>
    </Documentation>
  )
}
