let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")

if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
} else {
    saveEl.textContent = ""
}

let total = document.querySelector(".total-number")
let countEl = document.getElementById("count-el")
let count = 0
let result = 0;

function increment() {
    count += 1
    countEl.textContent = count

}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    result += count
    total.textContent = result

    localStorage.setItem( "gecmisBilgi", saveEl.textContent )

     countEl.textContent = 0
     count = 0
 
}