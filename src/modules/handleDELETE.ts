import http from 'http';
import { db } from './database.js';

export const handleDELETE = (req: http.IncomingMessage, res: http.ServerResponse) => {
  const userId = req.url?.split('/')[3];

  if (req.url === `/api/users/${userId}`) {
    if (userId?.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)) {
      const user = db.user.filter((item) => item.id === userId);

      if (user.length > 0) {
        const index = db.user.findIndex((item) => item.id === userId);

        db.user.splice(index, 1);

        res.writeHead(204, {
          'Content-Type': 'application/json',
        });
        res.end();
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
