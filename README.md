# LwFrontend

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## PASSOS PARA EXECUTAR O APP

OBS: Precisa ter o Docker instalado na máquina local.

1) Baixar os fontes do GitHub: https://github.com/cristianojedi/lw-app.git
2) Abrir um terminal de sua preferência e navegar até o diretório do projeto clonado do GitHub
3) Executar o comando para criar a imagem: docker build -t lw-frontend-image .
4) Executar o comando para criar e statar o container: docker container run -d --name lw-app -p 4200:4200 lw-frontend-image
5) Abrir a url no brouser: http://localhost:4200
