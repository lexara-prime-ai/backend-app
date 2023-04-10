const msg = (message:string): void => {
    console.log(message);
}

msg('Hello, NodeJs types...');

import * as fs from 'fs';
import path from 'path';
import http from 'http';
import { error } from 'console';
const PORT:number = 5501;

const SERVER = http.createServer((request, response):void => {

    let origin:any = '*'

    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': origin
        });
        response.end('Server response...');
        return;
    } else if (request.url === '/users') {
        fetch('https://dummyjson.com/users').then((response) => {
            return response.json();
        }).then((data) => {
            response.writeHead(200, {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': origin
            });
            response.end(data);
        }).catch((error) => {
            console.error(`${error.name}\t${error.message}`);
        })
    }

}).listen(PORT, (): void => {
    msg(`App is running at: http://localhost:${PORT}`);
})