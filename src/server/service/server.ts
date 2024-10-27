import express from 'express';
import expressws from 'express-ws';
import cors from 'cors';
import WebSocket from 'ws';

const baseApp = express();
const app = expressws(baseApp).app;
const port = 3000;

let connections: WebSocket.WebSocket[] = [];

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.ws('/', (ws, req) => {
  connections.push(ws);

  ws.on('message', (msg) => {
    for (let connection of connections) {
      connection.send(msg);
    }

    ws.onclose = () => {
      connections = connections.filter((connection) => connection != ws);
    };
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
