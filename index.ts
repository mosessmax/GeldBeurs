import express, { Express, Request, Response } from "express";
// const express = require('express');


const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello From Express + TS!!!')
})

app.get('/hi', (req, res) => {
  res.send('Hi From Express + TS!!!')
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})