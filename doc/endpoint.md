Endpoints | API Rest com NodeJs e TypeScript


- Cidades (Privado)

```
    GET    - /cidades       -> Busca uma lista de cidades, com paginação, filtro por nome e filtro por id

    POST   - /cidades       -> Cria uma nova cidade

    GET    - /cidades/:id   -> Busca apenas uma cidade pelo id

    PUT    - /cidades/:id   -> Atualiza uma cidade pelo id

    DELETE - /cidades/:id   -> Apaga a cidade pelo id

```
- Pessoas (Privado)

```
    GET    - /pessoas       -> Busca uma lista de pessoas, com paginação e filtro por nome

    POST   - /pessoas       -> Cria uma nova pessoa

    GET    - /pessoas/:id   -> Busca apenas uma pessoa pelo id

    PUT    - /pessoas/:id   -> Atualiza uma pessoa pelo id

    DELETE - /pessoas/:id   -> Apaga a pessoa pelo id
```

- Login (Público)
    
```
    POST  - /entrar     -> Permite um usuário existente no sistema gerar um token para acessar os endpoints privados

    POST  - /cadastrar  -> Permite criar um novo usuário
```
