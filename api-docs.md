# API Definitions

## Authentication APIs

### Login

- Method: POST
- Endpoint: /auth/login
- Request Body: 
  - username (string): User's username
  - password (string): User's password
- Response: 
  - Token (string): Access token for authentication

### Logout

- Method: POST
- Endpoint: /auth/logout
- Response:
  - Message (string): Logout successful

## User Management APIs

### Create User

- Method: POST
- Endpoint: /admin/users/create
- Request Body:
  - username (string): New user's username
  - password (string): New user's password
- Response:
  - User (object): Newly created user object

### Edit User

- Method: PUT
- Endpoint: /admin/users/:id/edit
- Request Body:
  - username (string): User's new username
  - password (string): User's new password
- Response:
  - User (object): Updated user object

...
