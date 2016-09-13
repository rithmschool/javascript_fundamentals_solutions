function productOfArray(arr){
    var product = product || 1
    if(!arr.length) return product
    return product = arr.pop() * productOfArray(arr,product)
}

function stringifyNumbers(obj){
    for(var key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] = obj[key].toString()
        }
        else if(Object.prototype.toString.call(obj[key]) === '[object Object]'){
            return stringifyNumbers(obj[key])
        }
    }
    return obj
}

function contains(obj, val){
    for(var key in obj){
        if(obj[key] === val){
            return true
        }
        else if(Object.prototype.toString.call(obj[key]) === '[object Object]'){
            return contains(obj[key], val)
        }
    }
    return false
}

function search(arr, val, idx){
    var idx = idx || 0;
    var copy = arr.slice()
    if(copy.length === 0) return -1
    if(copy[idx] === val) return idx
    idx++
    return search(copy, val,idx)
}

function binarySearch(arr, num, start, end){

}
