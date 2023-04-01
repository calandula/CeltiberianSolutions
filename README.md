Bienvenidos a este proyecto.

En este ejercicio se ha desarrollado un backend con una entidad User como eje central para hacer las pruebas conectado a una base de datos PostgreSQL y un servicio NextJS para presentación.

Hay 3 contenedores que deployar:

1. backend: desarrollado con NestJS y donde se puede acceder a ciertos endpoints para cambiar la relación user

2. base de datos Postgres: necesaria para almacenar persistentemente los usuarios, el backend interactúa con ella con un ORM llamado TypeORM

3. El frontend desarrollado con NextJS: en el mismo hay dos pantallas a las que acceder, la de crear usuarios y la de listarlos.

Primero, para correrlo todo es necesario tener instalado Docker y docker-compose

Cuando ya lo tengamos, en la raíz del proyecto ejecutamos:

1. docker-compose build

2. docker-compose up -d

Cuidado con estar usando los mismos puertos en los que exponemos los servicios!

Después, si todo ha ido bien, accedemos a http://localhost:4000/  donde a partir de alli ejecutamos métodos sobre usuarios accediendo a List of Users para listar a los usuarios que tenemos y Create User para crear uno nuevo.

Mucha suerte y espero que disfrutes, si tienes una duda contáctame a calandula97@gmail.com