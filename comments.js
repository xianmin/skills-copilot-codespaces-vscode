// Create web server
// Run: node comments.js
// Test: curl -d "user=John&comment=Hello" http://localhost:8080/comment
// Test: curl http://localhost:8080/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Store comments in memory
var comments = [];

// Add a comment
app.post('/comment', function(req, res) {
  var comment = req.body;
  comment.timestamp = new Date(); // Add timestamp
  comments.push(comment); // Add to in-memory store
  res.json(comment); // Return new comment with {id} generated
});

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Start server
app.listen(8080);
console.log('Server is listening to http://localhost:8080');
