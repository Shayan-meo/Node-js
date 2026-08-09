const fs = require("fs");

// Read File - file ka data padhne ke liye

fs.readFile("test.teliyex", "utf8", (err, data) => {
  console.log(data);
});

// Delete File - file ko delete karne ke liye

fs.unlink("test.txt", () => {
  console.log("File deleted");
});

// Create / Write File - nayi file banane ya purani ko overwrite karne ke liye

fs.writeFile("test.tet", "Hello Shayan", () => {
  console.log("File saved");
});


// Create Folder - nayi directory (folder) banane ke liye

fs.mkdir("myFolder", () => {
  console.log("Folder created");
});


// Rename File - file ka naam badalne ke liye

fs.rename("test.tex", "testing.tex",()=> {
    console.log("change file name");

})

// File Info - file ki details (size, date, file hai ya folder) nikalne ke liye

fs.stat("testing.tex", (err , stats)=>{
    console.log(stats);

})

// Read Folder - folder ke andar ki saari files ki list lene ke 

fs.readdir("./", (err,file)=>{
    console.log(file);

})


// Check File - file mojood hai ya nahi, ye check karne ke liye

fs.access("test.txt" ,(err)=>{
    if(err)console.log("file is not found");
    else console.log("file exists");
})

// Append File - purana data mitaye bagair naya data end mein add karne ke liye

fs.appendFile("test.txt", "\nNew line add", () => {
  console.log("Data added");
});

// Copy File - file ki copy banane ke liye

fs.copyFile("testing.tex", "testing.txt", () => {
  console.log("File copied");
});

// Read Stream - badi file ko chunk (chote tukdon) mein padhne ke liye
const stream = fs.createReadStream("new.txt", "utf8");

// data event - har chunk milne par chalta hai
stream.on("data", (chunk) => {
  console.log(chunk);
});




// end event - poori file padh lene par chalta hai
stream.on("end", () => {
  console.log("File read complete");
});

// error event - koi error aane par chalta hai
stream.on("error", (err) => {
  console.log("Error:", err);
});
