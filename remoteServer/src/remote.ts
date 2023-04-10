const msg = (message: string): void => {
    console.log(message);
}

msg('Remote server...');

import * as fs from 'fs/promises';
import path from 'path';
import http from 'http';

const SERVER = http.createServer(async (req, res) => {
        let data = await fs.readFile(path.join(__dirname, '../data', 'users.json'), 'utf-8');
        console.log(req.url, ' ', req.method);
        res.end(data);
}).listen(8000);