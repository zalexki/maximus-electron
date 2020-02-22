// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { exec } = require('child_process');

 setInterval(() => {
  exec('docker ps -a ', (err, stdout, stderr) => {
    document.getElementById('text').value = stdout;
  });
 }, 2000);