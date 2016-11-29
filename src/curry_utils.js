import { curry } from 'lodash';

let match = curry(
    (pattern,str) => {
        return str.match(pattern);
    }
);

let replace = curry(
    (pattern, replacement, str) => {
        return str.replace(pattern, replacement);
    }
);

let filter = curry(
    (predicate, array) => {
        return array.filter(predicate);
    }
);


let map = curry(
    (predicate, array) => {
        return array.map(predicate);
    }
);

export {
    match,
    replace,
    filter,
    map
}
