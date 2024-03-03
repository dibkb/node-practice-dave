const { error } = require("console");
const fs = require("fs");
const path = require("path");
// readfile
fs.readFile(path.join(__dirname, "files", "demo.txt"), (error, data) => {
  if (error) throw error;
  if (data) {
    fs.appendFile(
      path.join(__dirname, "files", "writedemo.txt"),
      " \n" + data + "\n Added line",
      (error) => {
        if (error) throw error;
      }
    );
  }
});
