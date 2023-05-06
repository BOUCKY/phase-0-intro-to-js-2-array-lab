// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(){
    cats.shift(name)
}

function appendCat(name){
    var newArray1 = [...cats, name]
    return newArray1
}

function prependCat(name){
    var newArray2 = [name, ...cats]
    return newArray2
}

function removeLastCat(){
    var newArray3 = cats.slice(0, -1)
    return newArray3
}

function removeFirstCat(){
    var newArray4 = cats.slice(1)
    return newArray4
}