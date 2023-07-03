import http from 'http';
import { handleGET } from './modules/handleGET.js';
import { handlePOST } from './modules/handlePOST.js';
import { handlePUT } from './modules/handlePUT.js';
import { handleDELETE } from './modules/handleDELETE.js';
import 'dotenv/config';

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET': {
      handleGET(req, res);
      break;
    }

    case 'POST': {
      handlePOST(req, res);
      break;
    }

    case 'PUT': {
      handlePUT(req, res);
      break;
    }

    case 'DELETE': {
      handleDELETE(req, res);
      break;
    }

    default: {
      const data = JSON.stringify({ message: 'not implemented' });

      res.writeHead(502, {
        'Content-Type': 'application/json',
      });
      res.end(data);
      break;
    }
  }
});

const PORT = process.env.PORT ?? 4000;

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`);
});
