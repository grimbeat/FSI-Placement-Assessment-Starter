// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

let yourName = "Subin Julie Hwang" 

// Gingerbread
function updateQtygb(displayQtygb) {
    let qtygb = document.querySelector("#qty-gb")
    qtygb.innerHTML = displayQtygb
}
//Chocolate Chip
function updateQtycc(displayQtycc) {
    let qtycc = document.querySelector("#qty-cc")
    qtycc.innerHTML = displayQtycc
}
//Sugar Sprinkle
function updateQtysugar(displayQtysugar) {
    let qtysugar = document.querySelector("#qty-sugar")
    qtysugar.innerHTML = displayQtysugar
}

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Gingerbread
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
// Chocolate Chip
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
// Sugar Sprinkle
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

//Ginger Bread Btn
gbPlusBtn.addEventListener('click', function() {
    qtygb = gb++
    updateQtygb(qtygb)
})
gbMinusBtn.addEventListener('click', function() {
    if (gb >= 0) {
        qtygb = gb--
    }
    updateQtygb(qtygb)
})

//Chocolate Chip Btn
ccPlusBtn.addEventListener('click', function() {
    qtycc = cc++
    updateQtycc(qtycc)
})
ccMinusBtn.addEventListener('click', function() {
    if (cc >= 0) {
        qtycc = cc--
    }
    updateQtycc(qtycc)
})

//Sugar Sprinkle Btn
sugarPlusBtn.addEventListener('click', function() {
    qtysugar = sugar++
    updateQtysugar(qtysugar)
})
sugarMinusBtn.addEventListener('click', function() {
    if (sugar >= 0) {
        qtysugar = sugar--
    }
    updateQtysugar(qtysugar)
})

// TODO: Hook up event listeners for the rest of the buttons
