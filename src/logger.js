let isFunction = item => 
    typeof item === 'function'

let log = function(item) {
    isFunction(item) ?
    console.log(item.call(null)) :
    console.log(item)
}

export default log;
