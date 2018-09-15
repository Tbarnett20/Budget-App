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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise')
  }, 50000);
});
}).then((str) => {
  console.log('Does this run?', str)
}).catch((error)=> {
  console.log('error: ', error);
})

console.log('After')