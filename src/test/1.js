console.log(1);
console.log(2);
setTimeout(function(){
    console.log('setTimeout1')
    Promise.resolve().then(function(){
        console.log('Promise1')
    })
})
setTimeout(function(){
    console.log('setTimeout2')
    Promise.resolve().then(function(){
        console.log('Promise2')
    })
})


