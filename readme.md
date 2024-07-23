# Desafio Docker - GO

Você terá que publicar uma imagem no docker hub.

Quando executarmos:

```docker run <seu-user>/fullcycle```

Temos que ter o seguinte resultado: "Full Cycle Rocks!!"

** A imagem de nosso projeto Go precisa ter menos de 2MB =)

# Desafio Docker - Proxy

A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```<h1>Full Cycle Rocks!</h1>```

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Não esqueça de colocar o volume na aplicação para o ambiente de desenvolvimento.
