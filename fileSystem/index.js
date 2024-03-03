const { error } = require("console");
const fs = require("fs");
const path = require("path");
// readfile
fs.readFile(path.join(__dirname, "files", "demo.txt"), (error, data) => {
  if (error) throw error;
  if (data) {
    fs.writeFile(
      path.join(__dirname, "files", "writedemo.txt"),
      data + "\n Added line",
      (error) => {
        if (error) throw error;
      }
    );
  }
});
