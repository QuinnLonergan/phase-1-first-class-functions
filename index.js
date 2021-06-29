function callback() {
    console.log("nice")
}

function receivesAFunction(callback) {
    callback()
}


function returnsAnAnonymousFunction() {
    return (function() {
        return "hopefully"
    })
}

function returnsANamedFunction() {
    return (function named() {
        return "hopefully"
    })
}
