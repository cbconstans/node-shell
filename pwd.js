function pwd() {
    process.stdout.write(__dirname);
     // process.stdout.write(process.cwd())
} 
  

module.exports = pwd