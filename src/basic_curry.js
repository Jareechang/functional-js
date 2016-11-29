import log from './logger';

let add = function(x) {
    return (y) => {
        return x + y;
    };
};

let increment = add(1);
let addTen = add(10);


log(increment(2)); // starting at 1
log(addTen(2));


