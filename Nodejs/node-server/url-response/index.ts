import * as http from 'http';
import {IncomingMessage, ServerResponse} from 'http';
import * as fs from 'fs'; // TypeScript 用 * 号来引入，这样更加严谨
import * as p from 'path';

const server = http.createServer();
const publicDir = p.resolve(__dirname, 'public'); // __dirname 表示当前文件所在目录

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    const {method, url, headers} = request;
    switch (url) {
        // 如果 url 是 /index.html 我们就返回一个静态文件
        // 这些静态文件存放在根目录下的 public/static 目录里
        // 这些静态文件都是运行在浏览器里，而不是 node 里面的
        case '/index.html':
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            fs.readFile(p.resolve(publicDir, 'index.html'), (error, data) => {
                // 读 public 目录下的 index.html 静态文件
                if (error) throw error; // 看有没有错误
                response.end(data.toString());
                // 将 data 从 buffer 变成 string，然后放到 data 放到 response 里面
            });
            break;
        case '/style.css':
            response.setHeader('Content-Type', 'text/css; charset=utf-8');
            fs.readFile(p.resolve(publicDir, 'style.css'), (error, data) => {
                // 读 public 目录下的 index.html 静态文件
                if (error) throw error; // 看有没有错误
                response.end(data.toString());
                // 将 data 从 buffer 变成 string，然后放到 data 放到 response 里面
            });
            break;
        case '/main.js':
            response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
            fs.readFile(p.resolve(publicDir, 'main.js'), (error, data) => {
                // 读 public 目录下的 index.html 静态文件
                if (error) throw error; // 看有没有错误
                response.end(data.toString());
                // 将 data 从 buffer 变成 string，然后放到 data 放到 response 里面
            });
            break;
        default:
            response.statusCode = 404;
            response.end();
    }
});


server.listen(8888);