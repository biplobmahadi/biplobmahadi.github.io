export const responseFormat = `{ isSuccess: boolean; data: actual data; message: string; }`;

export const dbCode = `{
    "posts": [
      { "id": 1, "title": "json-server", "author": "typicode" },
      { "id": 2, "title": "json", "author": "react" },
      { "id": 3, "title": "server", "author": "typescript" },
      { "id": 4, "title": "demo-server", "author": "redux" }
      { "id": 5, "title": "server-demo", "author": "axios" }
    ],
}`;

export const packageJson = `{
    "name": "backend",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "node server.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "json-server": "^0.17.0"
    }
}`;

export const serverCode = `const path = require("path");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

router.render = (req, res) => {
  res.jsonp({
    isSuccess: res.statusCode !== 404 ? true : false,
    data: res.statusCode !== 404 ? res.locals.data : null,
    message: res.statusCode !== 404 ? "Successfully done!" : "Error occurred!",
  });
};

const port = 5050;

server.listen(port, () => {
  console.log("JSON Server is running on port", port);
});`;
