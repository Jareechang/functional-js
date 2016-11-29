import {
    match, 
    filter, 
    replace 
} from './curry_utils';

import log from './logger';

let hasSpaces = match(/\s+/g);
log(hasSpaces('hello world'));

let findSpaces = filter(hasSpaces);
log(findSpaces(['teldo_woop', 'teldo woop']));

let noVowels = replace(/[aeiouy]/ig);
let censored = noVowels('*');
log(censored('chocolate sundae'));

