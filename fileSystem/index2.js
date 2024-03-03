const fsPromises = require("fs").promises;
const path = require("path");
const fileOperation = async function () {
  try {
    const demoOne = await fsPromises.readFile(
      path.join(__dirname, "files", "demoOne.txt"),
      "utf-8"
    );
    await fsPromises.unlink(path.join(__dirname, "files", "demoOne.txt"));
    const demoTwo = await fsPromises.readFile(
      path.join(__dirname, "files", "demoTwo.txt"),
      "utf-8"
    );
    await fsPromises.unlink(path.join(__dirname, "files", "demoTwo.txt"));

    await fsPromises.appendFile(
      path.join(__dirname, "files", "writeDemo.txt"),
      demoOne + "\n" + demoTwo
    );
    const demoFinal = await fsPromises.readFile(
      path.join(__dirname, "files", "writeDemo.txt"),
      "utf-8"
    );
    console.log(demoFinal);
  } catch (error) {
    throw error;
  }
};
fileOperation();
