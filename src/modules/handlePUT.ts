import http from 'http';
import { db } from './database.js';
import { IResponse } from './types.js';
import { validatePUT } from './validate.js';

export const handlePUT = (req: http.IncomingMessage, res: http.ServerResponse) => {
  const userId = req.url?.split('/')[3];

  if (req.url === `/api/users/${userId}`) {
    if (userId?.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)) {
      const user = db.user.filter((item) => item.id === userId);

      if (user.length > 0) {
        const buff: Uint8Array[] = [];
        let response: IResponse;

        req.on('data', (chunk) => {
          buff.push(chunk);
        });

        req.on('end', () => {
          const body = Buffer.concat(buff).toString();
          response = validatePUT(body, userId);

          res.writeHead(response.code, {
            'Content-Type': 'application/json',
          });
          res.end(response.data);
        });
      } else {
        const data = JSON.stringify({ message: 'user is not found' });

        res.writeHead(404, {
          'Content-Type': 'application/json',
        });
        res.end(data);
      }
    } else {
      const data = JSON.stringify({ message: 'invalid data in request' });

      res.writeHead(400, {
        'Content-Type': 'application/json',
      });
      res.end(data);
    }
  } else {
    const data = JSON.stringify({ message: 'not found' });

    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    res.end(data);
  }
};
