# FS (File System) — Node.js

Node.js ka built-in `fs` module practice. Is module se hum files aur folders par kaam kar sakte hain — banana, padhna, likhna, delete karna waghera.

```js
const fs = require("fs");
```

## Files

| File | Kya hai |
|---|---|
| `FileSystem.js` | Saare `fs` functions ki practice |
| `new.txt` | `createReadStream` se padhi jane wali file |
| `test.tet` | `writeFile` se bani file |
| `test.txt` | `appendFile` se data add kiya gaya |
| `testing.tex` | `rename` se naam badla gaya |
| `testing.txt` | `copyFile` se copy bani |

## fs Functions

### 1. `fs.readFile()` — File padhna
File ka data padhta hai.
```js
fs.readFile("test.tex", "utf8", (err, data) => {
  console.log(data);
});
```

### 2. `fs.unlink()` — File delete karna
File ko delete kar deta hai.
```js
fs.unlink("test.txt", () => {
  console.log("File deleted");
});
```

### 3. `fs.writeFile()` — File banana / likhna
Nayi file banata hai. Agar file pehle se hai to purana data mit jata hai (overwrite).
```js
fs.writeFile("test.tet", "Hello Shayan", () => {
  console.log("File saved");
});
```

### 4. `fs.mkdir()` — Folder banana
Nayi directory (folder) banata hai.
```js
fs.mkdir("myFolder", () => {
  console.log("Folder created");
});
```

### 5. `fs.rename()` — Naam badalna
File ka naam badalta hai.
```js
fs.rename("test.tex", "testing.tex", () => {
  console.log("change file name");
});
```

### 6. `fs.stat()` — File ki details
File ki information deta hai — size, banane ki date, file hai ya folder.
```js
fs.stat("testing.tex", (err, stats) => {
  console.log(stats);
});
```

### 7. `fs.readdir()` — Folder ki list
Folder ke andar ki saari files ka naam array mein deta hai.
```js
fs.readdir("./", (err, file) => {
  console.log(file);
});
```

### 8. `fs.access()` — File check karna
Batata hai ke file mojood hai ya nahi.
```js
fs.access("test.txt", (err) => {
  if (err) console.log("file is not found");
  else console.log("file exists");
});
```

### 9. `fs.appendFile()` — Data add karna
Purana data mitaye bagair naya data file ke end mein add karta hai.
```js
fs.appendFile("test.txt", "\nNew line add", () => {
  console.log("Data added");
});
```

### 10. `fs.copyFile()` — File copy karna
File ki copy banata hai.
```js
fs.copyFile("testing.tex", "testing.txt", () => {
  console.log("File copied");
});
```

### 11. `fs.createReadStream()` — Stream se padhna
Badi file ko chunk (chote tukdon) mein padhta hai. Poori file ek sath memory mein load nahi hoti, isliye badi files ke liye behtar hai.

```js
const stream = fs.createReadStream("new.txt", "utf8");

// har chunk milne par chalta hai
stream.on("data", (chunk) => {
  console.log(chunk);
});

// poori file padh lene par chalta hai
stream.on("end", () => {
  console.log("File read complete");
});

// koi error aane par chalta hai
stream.on("error", (err) => {
  console.log("Error:", err);
});
```

**Stream ke events:**
- `data` — jab bhi ek chunk milta hai
- `end` — jab poori file padh li jaye
- `error` — jab koi masla ho (jaise file na mile)

## Run

```bash
node FileSystem.js
```

Output:
```
New line add
File read complete
```

## Note

`FileSystem.js` mein sirf `createReadStream` wala code active hai, baqi functions comment mein hain. Kisi bhi function ko test karne ke liye uska comment hata dein.

readFile / writeFile / unlink jaise functions **async** hain — inka result callback ke andar milta hai, isliye console.log callback ke bahar likhne se kaam nahi karega.
