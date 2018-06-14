># unb-feelings-web-app

[![license](https://img.shields.io/badge/license-MIT-lightgrey.svg?longCache=true&style=flat-square)](https://github.com/UnbFeelings/unb-feelings-web-app/blob/master/LICENSE)
[![node](https://img.shields.io/badge/node-v9.8.0-ff69b4.svg?longCache=true&style=flat-square)](https://nodejs.org/)
[![Build Status](https://img.shields.io/travis/UnbFeelings/unb-feelings-web-app.svg?style=flat-square)](https://travis-ci.org/UnbFeelings/unb-feelings-web-app)
[![pipeline status](https://gitlab.com/UnbFeelings/unb-feelings-web-app/badges/master/pipeline.svg)](https://gitlab.com/UnbFeelings/unb-feelings-web-app/commits/master)
[![Coverage Status](https://coveralls.io/repos/github/UnbFeelings/unb-feelings-web-app/badge.svg?branch=master)](https://coveralls.io/github/UnbFeelings/unb-feelings-web-app?branch=master)

[![Stars](https://img.shields.io/github/stars/UnbFeelings/unb-feelings-web-app.svg?style=social&label=Stars)](https://github.com/UnbFeelings/unb-feelings-web-app/stargazers)
[![Watchers](https://img.shields.io/github/watchers/UnbFeelings/unb-feelings-web-app.svg?style=social&label=Watch)](https://github.com/UnbFeelings/unb-feelings-web-app/watchers)

O projeto `unb-feelings` possui como objetivo diagnosticar o estado psicológico de alunos e professores da Universidade de Brasília através de notificações voluntárias.

O nome é inspirado em hashtags utilizadas em redes sociais (como Twitter, Facebook e Instagram) para descrever situações típicas ou excêntricas que aconteceram na universidade.

Este repositório é dedicado ao `front-end` do `unb-feelings`, um web app construido sobre a biblioteca [React Js](https://reactjs.org/) e consumidor da [api unb-feelings](https://github.com/UnbFeelings/unb-feelings-api).

>## Mais informações
* Repositório de [documentação](https://github.com/UnbFeelings/unb-feelings-docs)

>## Preparação do Ambiente de Desenvolvimento
1. Clone o repositório:
  ```
  git clone https://github.com/UnbFeelings/unb-feelings-web-app
  ```
2. Instale o [docker](https://docs.docker.com/engine/installation/)
3. Instale o [docker-compose](https://docs.docker.com/compose/install/)
4. Execute o comando:
  ```
  sudo docker-compose up
  ```
5. Acesse a aplicação na porta `3000` do seu `localhost`: [http://localhost:3000](http://localhost:3000)
6. Como esta aplicação consome a api unb-feelings, também é necessário executar esse ambiente, para isso acesse o repositório da api [aqui](https://github.com/UnbFeelings/unb-feelings-api) e siga as instruções de configuração conforme o [README](https://github.com/UnbFeelings/unb-feelings-api/blob/master/README.md) do projeto.
7. Para executar os testes e a ferramenta de lint, basta fazer:
```
sudo docker-compose -f compose/test/docker-compose.test.yml build
sudo docker-compose -f compose/test/docker-compose.test.yml run unbfeelings yarn lint
sudo docker-compose -f compose/test/docker-compose.test.yml run unbfeelings yarn test
```


>## Licença
* [MIT License](https://github.com/UnbFeelings/unb-feelings-web-app/blob/master/LICENSE)
