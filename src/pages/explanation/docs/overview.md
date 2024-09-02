## Visão Geral

Este projeto adota uma abordagem moderna e modular para o desenvolvimento de aplicações, inspirada nas melhores práticas da engenharia de software. As decisões arquiteturais foram guiadas por referências como "Clean Architecture" de Robert C. Martin e "Domain-Driven Design" de Eric Evans. O objetivo principal é manter um código organizado, escalável e fácil de manter, facilitando tanto o desenvolvimento contínuo quanto a integração de novos membros na equipe. A estrutura modular permite uma clara separação de responsabilidades, garantindo que cada parte do sistema seja independente e reutilizável.

### Exemplo de estrutura de pastas:

- 📂 my-example-project
    - 📂 assets
      - 📄 your-favicon.tsx
      - 📄 your-img.tsx
    - 📂 src
        - 📂 components
            - 📄 form.tsx
            - 📄 input.tsx
            - 📄 index.ts
        - 📂 modules
            - 📂 user
              - 📂 hooks
                - 📄 use-user.ts
              - 📂 services
                - 📄 user-service.ts
              - 📂 utils
              - 📂 types
                - 📄 user.ts
                - 📄 create-user.ts
            - 📂 core
              - 📂 config
                - 📄 main.tsx
                - 📄 i18n.ts
              - 📂 layouts
                - 📄 defaultLayout.ts
                - 📄 secondaryLayout.ts
              - 📂 locales
                - 📂 pt-br
                  - 📄 translation.tsx
                  - 📄 common.tsx
                  - 📄 index.ts
                - 📂 en-us
                  - 📄 translation.tsx
                  - 📄 common.tsx
                  - 📄 index.ts
              - 📂 services
                - 📄 api.tsx
                - 📄 request.tsx
                - 📄 cach.tsx
              - 📂 contexts
                - 📄 your-global-contenxt.tsx
              - 📂 routes
                - 📄 your-routes-config.tsx
        - 📂 pages
            - 📂 dashboard
              - 📂 components
              - 📄index.tsx
            - 📂 login
              - 📄index.tsx
            - 📄index.ts

### Breve explicação dos módulos

```
core
├── config
│   └── Arquivos de configurações do projeto
├── layouts
│   └── Isso depende do framework que você está utilizando,
  	no caso de Next, você não precisa dessa pasta, o layout, toma esta responsabilidade
├── locales
│   └── Arquivos de tradução
├── routes
│   └── Só é necessária no caso do react-router-dom, serve para configurar as rotas do projeto
├── services
│   └── Aqui fica a configuração principal do axios, e o request base, que será importado
para todas as requisições do sistema
└── styles
    └── global.css


user
├── hooks
│   └── hook que pode ser chamado para utilizar qualquer função relacionada ao módulo
de usuário
├── services
│   └── Funções que reútilizam o service base para buscar, cadastrar, editar
ou excluir dados do backend.
├── types
│   └── Tipagem da entidade de Usuário e tipagem de parâmetros e respostas de todas as requisições
└── utils
    └── funções úteis para lidar com dados que sejam relacionados ao módulo de usuário
```

