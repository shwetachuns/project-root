// app.js

const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const groupController = require('./controllers/groupController');
const messageController = require('./controllers/messageController');

const app = express();

app.use(bodyParser.json());

// Authentication APIs
app.post('/login', authController.login);
app.post('/logout', authController.logout);

// User Management APIs
app.post('/admin/create_user', userController.createUser);
app.put('/admin/edit_user/:userId', userController.editUser);

// Group Management APIs
app.post('/groups/create_group', groupController.createGroup);
app.delete('/groups/delete_group/:groupId', groupController.deleteGroup);
app.get('/groups/all_groups', groupController.getAllGroups);
app.post('/groups/add_member/:groupId', groupController.addMember);

// Group Messages APIs
app.post('/groups/send_message/:groupId', messageController.sendMessage);
app.post('/groups/like_message/:messageId', messageController.likeMessage);

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  // Handling a POST request to '/create_user'
app.post('/create_user', (req, res) => {
    // Logic to create a user
    res.send('User created successfully');
  });
  
  // Handling a PUT request to '/edit_user/:userId'
  app.put('/edit_user/:userId', (req, res) => {
    // Logic to edit a user
    res.send('User edited successfully');
  });
  
  app.delete('/delete_user/:userId', (req, res) => {
    const userId = req.params.userId;
    // Logic to delete the user with the specified userId
    res.send(`User with ID ${userId} deleted successfully`);
  });
  
module.exports = app; // Export the app for testing
