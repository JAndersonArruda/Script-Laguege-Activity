## Exercicos de Script
O referente projeto foi desenvolvido para suprir as necessidades aprovativas das atividades avaliativas da disciplina "Linguagem de Script". Tendo como componentes vários sob-projetos independentes. Pondo em prática os conceitos adiquiridos no desemvolver do curso.
##

### Estrutura básica
A estrutura do projeto consite, em uma organização por componetes, buscando uma melhor organização, entendimento e manutentabilidade do projeto.

Cada sub-projeto esta agrupado no diretorio ```apps```, no qual, encontram-se os componetes de cada desafio do sub-projeto, cada arquivo de componete, possuí em seu conteudo dois arquivos, repectivamente ```index.html``` e  ```index.js```, com exeção do ***quarto sub-projeto*** que possuí um diretorio extra, chamado ```modules```, que contém um arquivo modúlo ```lista.js```. Além do diretório ```apps```, há o ```docs```, que contém os arquivos das questões de cada desafio dos sub-projetos. Estes dois diretorios estão agrupados no diretorio ```src``` localizado na raiz princial do porjeto.

Os arquivos de folha de estilização estão agrupados de acordo com seus respectivos sub-programas entitulados ```mod_01```, ```mod_02```, ```mod_03``` e ```mod_04```, onde, os diretorios citados estão contidos no diretorio ```assets```, encontrado na raiz do projeto.
##

### Funcionalidades
O projeto possuí várias funcionalidades tendo em vista que cada sub-projeto possuí um conjunto de até 5 desafios distintos, onde cada desafio abrange uma funcinalidade.

* **Sub-projeto 01**
  * **Desafio 01** -
    ***RandomicNumberList*** -> Gera um numero aleatorio ao cliclar no botão e o adiciona a lista de números aleatórios;

  * **Desafio 02** -
    ***PowerCalculator*** -> Retorna na tela o resultado de uma exponenciação, onde ususário irá informar a base e o expoente;

  * **Desafio 03** -
    ***BestFuel*** -> Compara os preços do alcool e da gasolia, e retorna na tela qual é o melhor commbustivel no memento;

  * **Desafio 04** -
    ***TemperatureConverter*** -> Retorna na tela a conversão de graus Celsius, em Fahrenheit e Kelvin, de forma autonôma;

  * **Desafio 05**
    ***StatisticalSimulation*** -> Efetua uma simulção de forma randômica e gera os dados estatisticos, apresentandos-os na tela.


* **Sub-projeto 02**
  * **Desafio 01** -
    ***ExtrenNumberConjuct*** -> Retorna o menor e o maior valor do connjunto de numeros informado;

  * **Desafio 02** -
    ***To-doList*** -> Aramazena e exibe uma lista de tarefaz criada pelo usuário, cada elemento da lista pode ser removido ao cliclar no ```x```;

  * **Desafio 03** -
    ***MoveShelf*** -> Retorna uma lista de filmes, onde, ao se alterar o campo de filtro, será filtrado automaticamente, por título, os filmes;

  * **Desafio 04** -
    ***SalaryList*** -> Armazena uma lista de empregados, com seus respectivos salários. E calcula qual empregado possuí o maior salário, o valor de total a debitado do financeiro para pagar os funcioonarios e retorna na tela está informações.


* **Sub-projeto 03**
  * **Desafio 01** -
    ***EventAgend*** -> Armazena eventos agendados pelo usuário e retorna uma lista de eventos em ordem crescente de acordo com os horarios de cada evento;

  * **Desafio 02** -
    ***BankAccount*** -> Armazena as contas de banco, onde nas mesmas, podem ser feitas operações de saque e deposito. As contas são mostradas para o usuário em forma de uma tabela;

  * **Desafio 03** -
    ***BankTrasaction*** -> Armazena e manipula transações fieitas em uma conta estática, retorna os valores em uma tabela de dados.


* **Sub-projeto 04**
  * **Desafio 01** -
    ***Stock*** -> Este sub-projeto armazena os dados do estoque infomamados pelo usuário no localStorage do Browser, possuí as funcionalidads de listar os produtos, adicionar e atualizar os dados no localStorage, além de gerar um código de barras único para cada produto cadastrado. Todas estas informações são exibidas para o usuário por meio de uma interface gráfica.
##

### Como executar o projeto
Para ter acesso e executar o projeto, algumas configurações são necessarias.

***Passo 01***

Crie um novo diretorio vasio e acesse-o pelo terminal
```
mkdir name-diretorio
cd name-diretorio
```

***Passo 02***

De acordo com o serviço que utiliza para se conectar ao repositorio execute um dos seguintes comandos:

Via requisição HTTP:
``` 
git clone https://github.com/JAndersonArruda/Script-Laguege-Activity.git
```
Via chave SSH:
``` 
git clone git@github.com:JAndersonArruda/Script-Laguege-Activity.git
```

***Passo 03***

Execute o arquivo index.html, localizado na raiz do projeto.
```
cd Script-Laguege-Activity
./index.html
```
##

### Tecnologias 
As tecnologias usadas no desenvolvimento do projeto são: HTML, CSS, e JavaScript
##

### Autor
[J. A. F. Arruda](https://github.com/JAndersonArruda/)
