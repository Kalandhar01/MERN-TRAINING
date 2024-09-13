function madhan() {
    console.log("Madhan Maadu");
}
madhan();

const madhan1 = () => {
    console.log("Madhan Maadu i am from arrow function");
}

madhan1();


const add = (a,b) =>{
    let check = a + b;
    return check;
}
let res = add(10,15);
console.log(res);


const sub = (a,b) => {return a-b} ;

// console.log(sub(10,15));
let ans  = sub(10,15);


//////no parameter

const nopar = (a,b,c) => {
    console.log(a,b,c);
}

nopar(10);