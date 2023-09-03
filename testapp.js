// Student Name: Dathan Dominic Neal
// Student ID: 1218482291
// Date August 27, 2023

// Note: Computer time is set to PHT

const fs = require('fs'); 

fs.readFile('./School/M1/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('Contents of the file:');
  console.log(data);
});

// Write to a file
const content = 'You have just wrote to a file via node!';
fs.writeFile('./School/M1/output.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log('File has been written successfully.');
});