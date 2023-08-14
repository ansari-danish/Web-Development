// // const arr = [1,2,3]
// // const print = require('./people')


// // console.log(arr)

// // const os = require('os');

// // console.log(os.platform(), os.homedir())

// // console.log(print)
// // const fs = require('fs')

// // const readable = fs.ReadStream('./index.txt');
// // const writeable = fs.WriteStream('./style.txt')

// // readable.pipe(writeable)


// const http = require('http')
// const fs = require('fs')

// const app = http.createServer((req, res) => {
//     console.log(req.url, req.method)

//     let path = './views/'

//     switch(req.url){
//         case '/': 
//             path+= 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200
//             break;
//         case '/about-me':
//             res.statusCode = 301
//             res.setHeader('Location', '/about')
//             res.end()
//             break
//         default : 
//          path += '404.html'
//          res.statusCode = 404
//          break
//     }


//     res.setHeader('Content-Type', 'text/html')

//     // Send the html file
//     fs.readFile(path, (err , data) => {
//         if(err){
//             console.log(err)
//             res.end(err )
//         } else {
//             // res.write(data)
//             res.end(data)
//         }
//     })


// })
// app.listen(3000 ,() => {
//     console.log("App is running")
// })




// Prints the Operating System Name 
// Add a File and Read their content
// Make and Delete a Txt File 
// Make a http Server
// Work with StreamBuffer
// Make a Router
// Make a redirect in Router

// const os = require('os')
// const fs = require('fs')

// console.log(os.platform(), os.homedir())
// fs.readFile('./text.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     else {
//         console.log(data.toString())
//     }
// })
// fs.unlinkSync('./text.txt')

const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const app = http.createServer((req , res) => {
    // console.log(req)

    const num = _.random(0,20)
    console.log(num)

    const greet = _.once(() => {
        console.log("Hello")
    })
    greet()

    let path = './views/'
    switch(req.url){
        case '/':
        path += './index.html';
        res.statusCode = 200
        break
        case '/about':
        path += './about.html';
        res.statusCode = 200
        break
        case '/about-me':
        res.setHeader('Location', '/about')
        break
        default : 
        path += '404.html';
        res.statusCode = 301
        break;
    }
    res.setHeader ('Content-Type', 'text/html')
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
        } else {
            res.end(data)
        }
    })

})

app.listen(3000, () => {
    console.log('App is running so well')
})


// const fs = require('fs')

// const readable = fs.createReadStream('./backend.txt')
// const writeable = fs.createWriteStream('./frontend.txt')

// readable.pipe(writeable);