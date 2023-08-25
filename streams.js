/* 24-08-2023 */
/* Here it is the readable and writeable streams of the data using the chunks concept */

// const fs=require('node:fs')
// const readablestream=fs.createReadStream('./file.txt',{
//     encoding:'utf-8',//assiging the data format of the data we provide in utf-8 format
//     highWaterMark:2//assigning the size of the chunks
// })
// const writeablestream=fs.createWriteStream('./file2.txt')
// readablestream.on('data',(chunks)=>{
//     console.log(chunks.toString())
//     writeablestream.write(chunks)
// })                          


// it is to create a zip file
// here we create a normal file and add zlib to the files and send the data into the zip file
// const fs=require('node:fs')
// const { request } = require('node:http')
// const zlib=require('node:zlib')
// const gzip=zlib.createGzip()
// const readablestream=fs.createReadStream('./file.txt',{
//     encoding:'utf-8',//assiging the data format of the data we provide in utf-8 format
//     highWaterMark:2//assigning the size of the chunks
// })
// const writeablestream=fs.createWriteStream('./file2.txt')
// readablestream.pipe(gzip)
// readablestream.pipe(gzip).pipe(fs.WriteStream('file2.txt.gz'))
// readablestream.on('data',(chunks)=>{
//     console.log(chunks.toString())
//     writeablestream.write(chunks)
// })  


//data json ans
const data=require('./data.json')
console.log(data)//will give everything in the data
console.log(data.name)//will give the name present in the data
console.log(data.place)//will give the place present in the data