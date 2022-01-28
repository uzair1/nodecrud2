import express from 'express';
import cors from 'cors';

//const express = require('express')

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000

var posts = [
    { text: "This is post no. 0"},
    { text: "This is post no. 1"},
    { text: "This is post no. 2"}
  ];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/fetch/:id', (req, res) => {

  const id = Number(req.params.id);
  res.send(posts[id]);
})

app.get('/fetchall', (req, res) => {
  res.send(posts);
})

app.post('/add', (req, res) => {
  posts.push(req.body);
  res.send(`Your post has been added and now we have ${posts.length} posts`);
})


app.get('/about', (req, res) => {
    res.send('Hello World! this is all about (ABOUT)')
  })
  

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})