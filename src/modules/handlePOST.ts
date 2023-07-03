import http from 'http';
import { validatePOST } from './validate.js';
import { IResponse } from './types.js';

export const handlePOST = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.url === '/api/users') {
    const buff: Uint8Array[] = [];
    let response: IResponse;

    req.on('data', (chunk) => {
      buff.push(chunk);
    });

    req.on('end', () => {
      const body = Buffer.concat(buff).toString();
      response = validatePOST(body);

      res.writeHead(response.code, {
        'Content-Type': 'application/json',
      });
      res.end(response.data);
    });
  } else {
    const data = JSON.stringify({ message: 'not found' });

    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    res.end(data);
  }
};
