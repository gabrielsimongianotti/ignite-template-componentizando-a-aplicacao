
# ignite-template-componentizando-a-aplicacao

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no ReactJS

Essa será uma aplicação onde o seu principal objetivo é refatorar uma página para listagem de filmes de acordo com gênero. 

A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo `App.tsx`. Para resolver isso da melhor forma, é necessário dividir a aplicação em **pelo menos** duas partes principais: sidebar e o conteúdo principal que possui o header e a listagem de filmes.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

### Fake API com JSON Server

Assim como utilizamos o MirageJS no módulo 2 para simular uma API com os dados das transações da aplicação dt.money, vamos utilizar o JSON Server para simular uma API que possui as informações de gêneros e filmes. 

Navegue até a pasta criada, abra no Visual Studio Code e execute os seguintes comandos no terminal:

```bash
yarn
yarn server
```

## Project run
![aws4_request X-Amz-Date=20210802T002550Z X-Amz-Expires=86400 X-Amz-Signature=d83a617db7bd1399327bb4b09c5ab5e112487c517c27d14e32665a9072ae4ae9 X-Amz-SignedHeaders=host](https://user-images.githubusercontent.com/26278442/127794602-7d81ea41-9803-4a74-96bd-9066f658a6e5.gif)
