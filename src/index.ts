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
        // https://dummyjson.com/users
       async function fetchContent() {
        let response = await fetch('http://localhost:8000/data');

        if (response.status === 200) {
            let data = await response.json();
            console.log(data);
            // HANDLE DATA
        };
       }

       response.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin
       });

       fetchContent();
       response.end('Success : Data received...');
    }

}).listen(PORT, (): void => {
    msg(`App is running at: http://localhost:${PORT}`);
})