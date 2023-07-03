import { db } from './database.js';
import { v4 as uuidv4 } from 'uuid';

export const validateGET = (body: string) => {
  const { username, age, hobbies } = JSON.parse(body);

  if (
    typeof username === 'string' &&
    username.trim().length > 0 &&
    typeof age === 'number' &&
    Array.isArray(hobbies)
  ) {
    const id = uuidv4();
    db.user.push({ id: id, username: username, age: age, hobbies: hobbies });

    return {
      code: 201,
      data: JSON.stringify({ id, username, age, hobbies }),
    };
  } else {
    return {
      code: 400,
      data: JSON.stringify({ message: 'invalid data in request' }),
    };
  }
};

export const validatePUT = (body: string, id: string) => {
  const { username, age, hobbies } = JSON.parse(body);

  if (
    typeof username === 'string' &&
    username.trim().length > 0 &&
    typeof age === 'number' &&
    Array.isArray(hobbies)
  ) {
    db.user.push({ id, username: username, age: age, hobbies: hobbies });

    return {
      code: 200,
      data: JSON.stringify({ id, username, age, hobbies }),
    };
  } else {
    return {
      code: 400,
      data: JSON.stringify({ message: 'invalid data in request' }),
    };
  }
};
