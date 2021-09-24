const countvalue = (count) => {
    return new Promise((resolve,reject) => {
        if(count >= 1)
        {
            setTimeout(() => {
                const heading = document.querySelector("h2");
                heading.innerText = count;
                resolve(count);
            },1000);
        }
        else
        {
            setTimeout(() => {
                const heading = document.querySelector("h2");
                heading.innerText = "Happy Newyear!!!";
            },1000);
        }
    });
};

//using async and await
async function countdown(count) {
    const msg = await countvalue(count);
    const msg1 = await countvalue(--count);
    const msg2 = await countvalue(--count);
    const msg3 = await countvalue(--count);
    const msg4 = await countvalue(--count);
    const msg5 = await countvalue(--count); 
}

countdown(5);

// msg(5)
// .then((n) => msg(--n))
// .then((n) => msg(--n))
// .then((n) => msg(--n))
// .then((n) => msg(--n))
// .then((n) => msg(--n))
// .catch((countdownmsg) => {
//     const heading = document.querySelector("h2");
//     heading.innerText = countdownmsg;
// })