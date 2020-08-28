## Rodar o projeto

Para rodar o projeto so executar os comandos abaixo

```
git  git clone https://github.com/SelecaoGlobocom/kayke-souto.git
cd kayke-souto
```

### Pré requisitos

```
Docker e docker-compose
```

Para instalar os pré requisitos, execute o comando abaixo:  

```
make install-dependencies
```

### Instruções

Para rodar o projeto, execute o comando abaixo: 

```
make run
```


## History

**Separei o projeto em pastas front, back .**

#### Back-end

No back end escolhi como linguagem node e usei o framework fastify, vendo um comparativo(https://github.com/fastify/benchmarks) o fastify tinha um desempenho melhor do que os frameworks listados nesse benchmarks. Vi que no decorrer do desnvolvimento o codigo ficou mais limpo.

###### O Desenvolvimento do Back-end

Inicie importando o arquivo exemplo.json para dentro da pasta backend como para ser usado como leitura e não como escrita.

Separei o projeto em uma pasta src dentro dela ficou separado em pastas os controller e middleware.

No arquivo index.js que fica na raiz fica o start da aplicação contento as rotas e as configurações de cors. Separei os metodos que são chamados no arquivo search.js dentro da pasta utils para facilitar os testes.

Criei um healthcheck para verificar se aplicação está de pé

Foi criado um arquivo na pasta middleware para verificar se esta sendo passado o query strings para rota do controller do search.js

Nos teste optei em usar o jest para fazer os testes dos meus metodos.

#### Front-end

O front-end foi todo densenvolvimento sem o uso de um framework javasript

Criei primeiro a estrutura de pastas e o index.html 

No desenvolvimento do box de resultado criei primeiro todo o html junto com css para partir pro javascript.

No javascript usei bastante a criação de elementos e o append. 

Me atentei bastante em deixar o front funcionando em todos os navegadores usei bastante o site Can i use(https://caniuse.com/) para saber se o que estava fazendo daria suporte a outros navegadores.

Adicionei um teste com cypress que testa a funcionalidade de live search

Usei o fastify-static para servir o meu front-end.

#### Infra

Inicialmente tinha criado uma pasta de infra e adicionado os dockerfile nessa pasta, mas mudei e deixei os dockerfile na pasta do back e do front. O docker-compose coloquei na raiz do projeto.

###### Problemas no dercorrer do desenvolvimento

Ao começar o densenvolvimento do front-end tive problemas com o cors, voltei ao back e configurei o cors no projeto.

Ao montar o docker compose tive alguns problemas com o caminho dentro do dockerfile então preferi colocar o dockerfile em nas suas respectivas pastas

##### Pontos a melhorar
 *Segurança

