# Server — Node.js

Node.js ka built-in `http` module practice. Is module se hum bina kisi package ke apna web server bana sakte hain.

```js
const http = require("http");
```

## Files

| File | Kya hai |
|---|---|
| `createServer1.js` | Sabse simple server — sirf ek message bhejta hai |
| `createServer2.js` | Server with status code aur header |

## 1. `createServer1.js` — Basic Server

```js
const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello form shayan server ");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})
```

**Samajhne ki baatein:**

- `http.createServer()` — server banata hai. Jab bhi koi request aati hai, ye callback chalta hai.
- `req` (request) — browser se aane wali maloomat (URL, method, headers)
- `res` (response) — jo hum browser ko wapas bhejte hain
- `res.end()` — response bhej kar connection band kar deta hai
- `server.listen(3000)` — server ko port 3000 par chalu karta hai

Chalane ke baad browser mein kholein: **http://localhost:3000**

## 2. `createServer2.js` — Status Code aur Header ke sath

```js
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

**Naya kya hai:**

- `const { createServer } = require('node:http')` — destructuring. Poora `http` lene ke bajaye sirf `createServer` nikal liya. `node:` prefix batata hai ke ye Node ka built-in module hai.
- `res.statusCode = 200` — batata hai ke request kamyab rahi (200 = OK)
- `res.setHeader('Content-Type', 'text/plain')` — browser ko batata hai ke data kis type ka hai
- `hostname = '127.0.0.1'` — localhost ka IP address
- Template literal `` `...${port}...` `` — string ke andar variable lagane ke liye

## Common Status Codes

| Code | Matlab |
|---|---|
| 200 | OK — sab theek |
| 404 | Not Found — page nahi mila |
| 500 | Server Error — server mein masla |

## Common Content-Type

| Type | Kab |
|---|---|
| `text/plain` | Sada text |
| `text/html` | HTML page |
| `application/json` | JSON data |

## Run

```bash
node createServer1.js
```

Phir browser mein **http://localhost:3000** kholein.

Server band karne ke liye terminal mein **Ctrl + C** dabayein.

## Note

Dono files port **3000** use karti hain. Ek waqt mein sirf ek hi chala sakte hain, warna `EADDRINUSE` error aayega (port pehle se busy hai).
