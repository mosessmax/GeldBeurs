import express, { Express, Request, Response } from "express";

const app: Express = express();
// const port = 3000
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello From Express + TS!!!')
})

app.get('/hi', (req, res) => {
  res.send('Hi From Express + TS!!!')
})

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`)
})