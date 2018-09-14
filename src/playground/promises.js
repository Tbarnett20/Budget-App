const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Terrance',
        //     age: 24
        // })
      reject('Error something went wrong')  
    }, 50000);
});

console.log('Before')

promise.then((data) => {
    console.log('1', data);
}).catch((error)=> {
console.log('error: ', error);
})

console.log('After')