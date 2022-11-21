## Executar

Primeiro é preciso baixar as dependências do projeto. O `npm install` sem parâmetros faz isso para nós.

```shell
npm install
```

Para executar (debug):

```shell
npm start
```

É também preciso executar o servidor com `json-server`:

```shell
npx json-server --watch server.json --port 3001
```
