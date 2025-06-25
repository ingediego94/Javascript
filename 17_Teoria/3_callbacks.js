
setTimeout(() => {
    console.log('First task completed');

    setTimeout(() => {
        console.log('Second task completed');
    }, 1000);
    
}, 1000);