
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('The promise succeded too'), 1000);
});

async function fetchData() {
    let result = await promise;
    console.log(result);
};

fetchData();