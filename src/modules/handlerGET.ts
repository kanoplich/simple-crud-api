import http from 'http';
import { db } from './database.js';

export const handlerGET = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.url === '/api/users') {
    const data = JSON.stringify(db.user);

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(data);
  }
};
