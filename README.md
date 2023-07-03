# simple-crud-api

## scripts

- **start:prod** - the application is run in production mode
- **start:dev** - the application is run in development mode
- **build** - build project
- **lint** - start eslint
- **format** - eslint fix

## implementation

**GET** api/users is used to get all persons

- Server should answer with status code 200 and all users records

**GET** api/users/{userId}

- Server should answer with status code 200 and record with id === userId if it exists
- Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
- Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

**POST** api/users is used to create record about new user and store it in database

- Server should answer with status code 201 and newly created record
- Server should answer with status code 400 and corresponding message if request body does not contain required fields

**PUT** api/users/{userId} is used to update existing user

- Server should answer with status code 200 and updated record
- Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
- Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist

**DELETE** api/users/{userId} is used to delete existing user from database

- Server should answer with status code 204 if the record is found and deleted
- Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
- Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
