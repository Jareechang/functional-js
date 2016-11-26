let isFunction = item => 
    typeof item === 'function'

let log = function(item) {
    console.log(item)
    isFunction(item) ?
    console.log(item.call(null)) :
    console.log(item);
}

export default log;
