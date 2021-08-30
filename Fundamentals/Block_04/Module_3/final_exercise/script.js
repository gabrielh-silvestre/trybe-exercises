const ex1 = (n) => {
    let msg = "";
    for (let i = 0; i < n; i++) {
        msg += "*";
    }

    for (let i = 0; i < n; i++) {
        console.log(msg);
    }
}

const ex2 = (n) => {
    let msg = "*";
    for (let i = 0; i <= n; i++) {
        console.log(msg.repeat(i));
    }
}

const ex3 = (n) => {
    let msg = "*";
    let space = " ";
    for (let i = 0; i <= n; i++) {
        console.log(space.repeat(n - i), msg.repeat(i));
    }
}
