const { error } = require('console');
const fs = require('fs');

const files = ['a.txt', 'b.txt', 'c.txt', 'd.txt', 'e.txt'];

// for (let val of files) {
//     fs.readFile(val, 'utf8', (err, data) => {
//         console.log(data);
//     });
// }

// for (let val of files) {
//     let data = fs.readFileSync(val);
//     console.log(data.toString());
// }


// Promise Syntax
const customFileRead = (fileName) => {

    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {

            if (error)
                reject(error);
            resolve(data);
        });
    });
};

// // Promise Chaining
const promiseChaining = () => {

    customFileRead(files[0])
        .then(val => {
            console.log(val);
            return customFileRead(files[1]);
        })
        .then(val => {
            console.log(val);
            return customFileRead(files[2]);
        })
        .then(val => console.log(val));

};


const readFilesByPromise = () => {

    // special cases for Promise
    // if then() doesnot have a return statement , the next then() will return undefined.
    customFileRead(files[0])
        .then(val => {
            console.log(val);
        })
        .then(val => {
            console.log(val);
            return customFileRead(files[2]);
        })
        .then(val => console.log(val));

};


const multiplyContentsOfFile = (files) => {
    let result = 1;
    return customFileRead(files[0])
        .then(val => {
            result = result * parseInt(val);
            return customFileRead(files[1]);
        })
        .then(val => {
            result = result * parseInt(val);
            return customFileRead(files[2]);
        })
        .then(val => {
            result = result * parseInt(val);
            return customFileRead(files[3]);
        })
        .then(val => {
            result = result * parseInt(val);
            return customFileRead(files[4]);
        })
        .then(val => {
            result = result * parseInt(val);
            return result;
        })
        .catch((error) => error);

};


multiplyContentsOfFile(files).then(res => console.log(res));