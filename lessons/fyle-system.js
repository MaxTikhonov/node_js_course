const fs = require('fs')
const path = require('path')

// console.log('START')
// fs.mkdir(path.resolve(__dirname, 'doir'), (err) => {
//  if (err) {
//   console.log(err);
//   return;
//  }
//  console.log('Папка создана')
// })
// console.log('END')
fs.writeFile(path.resolve(__dirname, 'test.txt'), '1231231223123123123123123123213123', (err) => {
 if (err) {
  throw err;
 }
 console.log('фАЙЛ ЗАПИСАН')
 fs.appendFile(path.resolve(__dirname, 'test.txt'), '5555555555555555555555', (err) => {
  if (err) {
   throw err;
  }
  console.log('фАЙЛ ПЕРЕЗАПИСАН')
 })
})

