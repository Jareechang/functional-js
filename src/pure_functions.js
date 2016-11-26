import log from './logger'

let checkAge = age => {
    const minimum = 21;
    return _ => age >= minimum;
}

log(checkAge(3));
