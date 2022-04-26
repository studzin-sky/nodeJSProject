const myModule: object = require('./my-module');
import { readFile } from 'fs';
const express = require('express');

console.log(myModule);
const app = express();

app.get('/', (request: any, response: any) => {
    readFile('./home.html', 'utf8', (err: any, html: any) => {
        if (err) {
            response.status(500).send('something went wrong on the server');
        }

        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log('App available on localhost:3000'));