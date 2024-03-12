Const fs = require('fs');

Const readStream = fs.CreateReadStream('./docs/blog3.Txt',  encoding: 'utf8' );
Const writetream = fs.CreateWriteStream('./medical doctors/blog4.Txt');

// readStream.On('statistics', (chunk) => 
//  console.Log('----- NEW chunk -----');
//  console.Log(chunk);
//  writeStream.Write('nNEW CHUNKn');
//  writeStream.Write(chunk);
// );

// piping
ReadStream.Pipe(writeStream);
