<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Acerca de la APP 

Este proyecto es una interfaz para el chat de la API TesloShop

Para ejecutar en el chat, es necesario tener un token que es generado al momento de loguearnos con nuestras credenciales, para ello puede usar POSTMAN o cualquier otra herramienta que le permita ejecutar endpoints; Luego cuando la API Teslo-Shop este en ejecucion visite la ruta [POST]```http://localhost:3000/api/auth/login``` y puede usar estos dos usuarios de ejemplo para el login.

```
 USUARIO 1:
 email:'test1@google.com',
 password:Abc123
 
 USUARIO 2:
 email:'test2@google.com',
 password:Abc123
```

Esto le generará dos tokens uno para cada usuario y con ello puede empezar el chat, si desea crearse nuevos usuarios puede vivitar la ruta [POST] ```http://localhost:3000/api/auth/register``` y crearse nuevos usuarios para despues loguearse y obtener su respectivo token.

# 🚀 Guia para la ejecución de chat Teslo

# Stack usado

* NodeJS
* TypeScript
* Socket-client.io


# Pasos previos para usar el chat de Teslo



## Levantar la aplicacion del chat en localhost
1. Clonar el repositorio 
2. Instalar la dependencias
```
yarn install
```
3. Antes de levantar la aplicacion, la API Teslo-Shop debe estar en ejecución

4. Ejecutar la aplicacion en desarrollo
```
yarn dev
```
5. Abrir dos ventanas en localhost para simular los chats e introducir los tokens previamente generados.
