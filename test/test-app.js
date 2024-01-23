// test/test-app.js

const request = require('supertest');
const server = require('../server'); // Import the server

afterAll((done) => {
  // Close the server after all tests are done
  server.close(done);
});

describe('Authentication APIs', () => {
  it('should authenticate a user', async () => {
    const response = await request(server) // Use the server for requests
      .post('/login')
      .send({ /* send login credentials */ });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('message', 'Login successful');
  });

  // Add more test cases for logout, etc.
});

// Add additional describe blocks for testing other API endpoints (User Management, Group Management, Group Messages)
