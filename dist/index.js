"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const port = 3000
const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send('Hello From Express + TS!!!');
});
app.get('/hi', (req, res) => {
    res.send('Hi From Express + TS!!!');
});
app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`);
});
