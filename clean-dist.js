const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

fs.rmdirSync(distDir, { recursive: true });
