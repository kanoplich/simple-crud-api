import http from 'http';
import { validate } from './validate.js';
import { IResponse } from './types.js';

export const handlerPOST = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.url === '/api/users') {
    const buff: Uint8Array[] = [];
    let response: IResponse;

    req.on('data', (chunk) => {
      buff.push(chunk);
    });

    req.on('end', () => {
      const body = Buffer.concat(buff).toString();
      response = validate(body);

      res.writeHead(response.code, {
        'Content-Type': 'application/json',
      });
      res.end(response.data);
    });
  }
};
