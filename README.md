Nessa aplicação eu criei base da estrutura da aplicação, com as entidades e as
entidades performam operações entre si, ou seja, os casos de uso. Somente com isso
é possível mapear o funcionamento da aplicação quase que por completo sem depender
de banco de dados e sem depender de rotas ou qualquer coisa assim. Nos repositórios não é a implementação do repositório, em nenhum momento eu estou tocando em banco de dados, a partir dessa estrutura que estou criando pode ser utilizado qualquer fremework e qualquer banco de dados, eu estou criando aqui a abstração, os contratos, os contratos de conversação entre as camadas.
  - ex: o StudentsRepository é só um contrato, ele defini quais parâmetros minhas funções recebem, quais são essas funções e qual o retorno delas, ou seja, é só
  o contrato, eu não tenho nada definido de implementação.
  
  - ex: como eu quero que os meus testes eles não dependam de um banco de dados, eles sejam só a nível da minha aplicação mesmo e não da camada de infra, eu crio repositórios que vão ser específicos para testes(utilizando o conceito: In MemoryTestDatabase)
  [Veja mais desse conceito aqui](https://martinfowler.com/bliki/InMemoryTestDatabase.html#:~:text=An%20in%2Dmemory%20database%20is,destroyed%20when%20the%20process%20finishes.)

