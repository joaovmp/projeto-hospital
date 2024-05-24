# Projeto Hospital

O Projeto Hospital é uma aplicação desenvolvida utilizando o framework NestJS, que é uma estrutura de aplicativo para construir aplicativos da web eficientes e escaláveis em Node.js. Este projeto é um exemplo de uma aplicação de gerenciamento hospitalar que inclui recursos como cadastro de pacientes, agendamento de consultas e muito mais.

## Tecnologias Principais

- **NestJS**: Framework para construir aplicativos da web eficientes e escaláveis em Node.js.
- **TypeScript**: Superset tipado para JavaScript que compila para JavaScript puro.
- **TypeORM**: ORM (Object-Relational Mapping) para Node.js que permite interagir com bancos de dados relacionais utilizando TypeScript.

## Funcionalidades

- **Cadastro de Pacientes**: Permite cadastrar novos pacientes, incluindo informações como nome, data de nascimento, e informações de contato.
- **Agendamento de Consultas**: Permite agendar consultas para pacientes, selecionando o médico, data e horário desejados.
- **Gestão de Médicos**: Possibilita gerenciar médicos, incluindo adição, edição e remoção de registros.

## Instalação

Para executar este projeto localmente, siga estas etapas:

1. Clone este repositório em sua máquina local usando `git clone`.
2. Navegue até o diretório do projeto e execute `npm install` para instalar as dependências.
3. Execute `npm run start:dev` para iniciar o servidor de desenvolvimento.
4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

## Testes

Os testes são escritos utilizando o Jest, um framework de testes em JavaScript. Para executar os testes, você pode usar os seguintes comandos:

- `npm run test`: Executa todos os testes uma vez.
- `npm run test:watch`: Executa todos os testes em modo de observação, reexecutando-os quando arquivos são modificados.
- `npm run test:cov`: Executa todos os testes e gera um relatório de cobertura de código.
- `npm run test:e2e`: Executa os testes de ponta a ponta (e2e).

### Estrutura dos Testes

Os testes estão localizados na pasta `test`. Os principais tipos de testes incluídos são:

- **Testes Unitários**: Verificam o comportamento de unidades isoladas do código (funções, classes, etc.).
- **Testes de Integração**: Verificam o comportamento de várias unidades integradas.
- **Testes de Ponta a Ponta (E2E)**: Verificam o comportamento da aplicação inteira, simulando a interação do usuário.


