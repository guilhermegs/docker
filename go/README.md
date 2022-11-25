# Go

Imagem criada rodando um programa em Golang que, simplesmente, exibe uma frase "Full Cycle Rocks!!".

O principal desafio nesse caso era criar uma imagem com menos de 2MB.

Para isso, foi criado um Dockerfile utilizando Multistage Building, o passo de build é realizado a partir de uma imgem oficial do Golang, copia os arquivos de código para a imagem e depois gera um binário do programa utilizando o comando `go build`

No segundo stage, a imagem é criar com base em uma imagem vazia ([scratch](https://hub.docker.com/_/scratch)) e o binário gerado no step anterior é copiado para cá e executado.

Com isso, a imagem final tem 1.81MB, atendendo o objetivo do desafio.

Você pode utilizar essa imagem por meio do comando: `docker run guilhermegs/fullcycle-golang`