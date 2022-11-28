# docker

O objetivo desse repositório ée armazenar o resultado de alguns estudos que estou fazendo com docker.

# docker-compose.yml

O arquivo `docker-compose.yml` da raiz do repositório é responsável por subir 3 containers: node, mysql e nginx.
Os 3 containers trabalham juntos, a aplicação node cadastra e lê registros do banco de dados e pode ser acessada através do nginx que trabalha como um proxy reverso.

Para criar os containers e acessar o conteúdo da aplicação, basta rodar o comando:

````
docker-compose up -d
curl http://localhost:8080
````
