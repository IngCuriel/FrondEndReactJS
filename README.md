# Front-End con React JS
Curso Práctico con React JS

[Documentación React ](https://create-react-app.dev/docs/) 

## ¿Que es React JS?
Es un libreria de javaScript para crear interfaces de usuarios muy amigables y esta basado en componentes.

## DOM, Virtual DOM Y React DOM
### ¿ Que es el Virtual DOM?
Es una herramienta que implementa react para darle perfomance y velocidad a nuestros desarrollos

### Crear una aplicación con React

 ```
  npx create-react-app nombre-de-tu-proyecto
 ```
### Iniciar el servidor de desarrollo
```
  npm start
```

## Tipos de componentes
 
 Al crear un componente Inicia con mayuscula ejemplo : Componente.js
 
* Tipo Función 
* Tipo Clase


# JSX: JavaScript + HTML
Es una sintaxis que nos permite escribir la estructura **HTML** y la lógica en **JavaScript** desde un mismo lugar. 

# Props : Comunicación entre Componentes
Las propiedades son la forma de enviar y recibir información entre componentes.
Es la forma de comunicar nuestros componentes
Son muy parecidas a los párametros y argumentos de las funciones en cualquier otro lenguaje.

## ¿Qué son los métodos del cliclo de vida?

[Documentación](https://platzi.com/clases/1651-react-ejs/22576-que-son-los-metodos-del-ciclo-vida/)

## State 

El estado es un objeto en el cual le pondemos definir variables de diferentes tipos(String,enteros, etc..) y lo bamos a poder acceder dentro de nuestro componente en el momento en que se Inicializa.


## Instalación y configuración de un entorno
  
  1. Crear la carpeta del proyecto
     ```
     mkdir CurielVideo
     ```
     ```
     cd CurielVideo
     ```
  2. Inicializar un repositorio en **GIT**
     ``` bash
     git init
     ```
  3. Inicializar proyecto de **Node.js**
    ```
     npm init -y
    ```
    La **-y** indica que se va a preconfigurar el documento package.json

  4. Instalar React
    ``` bash
      npm install -save react react-dom
    ```
### Estructura básica de un proyecto con react
    CurielVideo
      - public
        index.html 
      - src
        - components
        index.js
      package-lock.js
      package-json
## Agregando compatibilidad con todos los navegadores usando Babel

### ¿Que es Babel?

  Es una herramienta muy popular para escribir JavaScript moderno y transformalo en código que pueda enterder cualquier navegador.

1. Instalar Babel
```
   npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```
2. Crear archivo configuración **Babel**

```
  touch .babelrc
```
3. Agregar configuración en nuestro archivo `.babelrc`

```JS
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
}
```
## Webpack: Empaquetado nuestros módulos

Se encargar de empaquetar nuestro archivos (HTML, CSS, JavaScript , Multimedia) para tenenlos listo para el entorno en producción.

### Instalar y configurar **Webpack**

1. Instalación

```
npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev
```
2. Configuración

```
touch webpack.config.js
```
Agregar configuracón al webpack.config

```JS
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.html$/,
                use: [
                    {
                        loader:'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebPackPlugin({
          template:'./public/index.html',
          filename: './index.html'
      })
    ]
}
```
Se agrega el siguiente script en el archivo package.json

```JSON
"scripts": {
     "build" : "webpack --mode production"
  },
```
Compilamos 
```
npm run build 
```
## WebPack Dev Server: Reporte de errores y cambios en tipo real

1. Instalar paquete de webpack
  ```
    npm install --save-dev webpack-dev-server
  ```

2. Agregar script en el archivo package.json
  ```
  "scripts": {
     "start": "webpack-dev-server --open --mode development"
  },
  ```
3. Corre en comando
  ```
    npm run start
  ```