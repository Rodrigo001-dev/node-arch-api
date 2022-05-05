Nessa aplicação eu criei base da estrutura da aplicação, com as entidades e as
entidades performam operações entre si, ou seja, os casos de uso. Somente com isso
é possível mapear o funcionamento da aplicação quase que por completo sem depender
de banco de dados e sem depender de rotas ou qualquer coisa assim. Nos repositórios não é a implementação do repositório, em nenhum momento eu estou tocando em banco de dados, a partir dessa estrutura que estou criando pode ser utilizado qualquer fremework e qualquer banco de dados, eu estou criando aqui a abstração, os contratos, os contratos de conversação entre as camadas.
  - ex: o StudentsRepository é só um contrato, ele defini quais parâmetros minhas funções recebem, quais são essas funções e qual o retorno delas, ou seja, é só
  o contrato, eu não tenho nada definido de implementação.