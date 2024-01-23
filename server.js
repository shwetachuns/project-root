// server.js

const path = require('path');
const app = require(path.resolve(__dirname, 'src', 'app')); // Adjust the path if necessary

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server; // Export the server for testing purposes
