import * as http from 'http';
import {IncomingMessage, ServerResponse} from 'http';

const server = http.createServer();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
    console.log(request.constructor); // request 是由 IncomingMessage 类构造出来的
    console.log(IncomingMessage);
    console.log(request.httpVersion);
    console.log('request.method');
    console.log(request.method);
    console.log('request.url');
    console.log(request.url);
    console.log('request.headers');
    console.log(request.headers);
    console.log(response.constructor); // response 是由 ServerResponse 类构造出来的
    console.log('有人请求了');


    // 获取 POST 请求体
    const array = [];
    request.on('data', (chunk) => { // 获取 POST 事件的请求体
        // chunk 可以理解为是一小块代码/数据的意思
        array.push(chunk);
    });
    request.on('end', () => {
        const requestBody = Buffer.concat(array).toString();
        // 这样是一小段一小段地上传，所以即使是上传很大的文件也会很轻松
        console.log('requestBody');
        console.log(requestBody);
        response.end('hi');
    });
});


server.listen(8888, () => {
    console.log(server.address());
});