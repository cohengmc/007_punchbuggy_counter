let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-txt")
let first = 1

function increment(params) {
    count++
    console.log(count);
    countEl.innerHTML = count
}

function decrement(params) {
    if (count != 0) {
        count--
        console.log(count);
        countEl.innerHTML = count
    }
}

function save(params) {
    if(first){
        saveEl.innerHTML += " " + count
        first = 0
    } else {
        saveEl.innerHTML += ", " + count
    }
    count = 0
    countEl.innerHTML = count
}