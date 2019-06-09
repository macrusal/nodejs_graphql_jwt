# nodejs_graphql_jwt

#TSC - Typescript
Copia o conteudo do arquivo /src/app.ts para /dist/app.js <br>
node_modules/.bin/tsc

#GULP - Automatizador de tarefas
Copia o conteudo do arquivo /src/app.ts para /dist/app.js <br>
node_modules/.bin/gulp build

#NPM - Node Package Manager

#Nodemon - Automatizador de tarefas
npm run dev

#Graphql - Query
query { <br>
  allUsers { <br>
    id <br>
    name <br>
    email <br>
  } <br>
}<br>

#Graphql - Mutations
mutation { <br>
  createUser(name:"Maria Isabel", <br>
  email: "isabel@email.com.br") { <br>
    id <br>
    name <br>
    email <br>
  } <br>
}
