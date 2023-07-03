import http from 'http';
import { handlerGET } from './modules/handlerGET.js';
import { handlerPOST } from './modules/handlePOST.js';
import 'dotenv/config';

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET': {
      handlerGET(req, res);
      break;
    }

    case 'POST': {
      handlerPOST(req, res);
      break;
    }

    default: {
      res.end('Not implemented');
      break;
    }
  }
});

const PORT = process.env.PORT ?? 4000;

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`);
});
