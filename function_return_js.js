//function return
function sumAll() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var result = sumAll(1, 2, 3)
console.log(result)