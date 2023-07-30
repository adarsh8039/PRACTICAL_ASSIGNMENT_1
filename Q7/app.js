const fs = require('fs');
const util = require('util');

// Promisify the fs.unlink function
const promisifiedUnlink = util.promisify(fs.unlink);

// Call the promisified function in an async function
async function deleteFile(filePath) {
  try {
    await promisifiedUnlink(filePath);
    console.log(`Successfully deleted: ${filePath}`);
  } catch (err) {
    console.error(`Error deleting ${filePath}: ${err.message}`);
  }
}

// Example usage
const filePathToDelete = '../PRACTICAL_ASSIGNMENT_1/Q7/test_delete.txt';
deleteFile(filePathToDelete);
