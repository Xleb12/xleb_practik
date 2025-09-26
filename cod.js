const input1 = document.getElementById("input1")
const input2 = document.querySelector("#input2")
const btn = document.getElementById("btn")
const output = document.getElementById("output")
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const numberOrNot1 = Number(input1.value)
    const numberOrNot2 = Number(input2.value)
    let result = ''
    if (isNaN(numberOrNot1) && isNaN(numberOrNot2)){
        result = "Не то пишешь в двух полях"
    }
    if (isNaN(numberOrNot1) && !isNaN(numberOrNot2)){
        result = "Не то пишешь во втором поле"
    }
    if (!isNaN(numberOrNot1) && isNaN(numberOrNot2)){
        result = "Не то пишешь в первом поле"
    }
    if (!isNaN(numberOrNot1) && !isNaN(numberOrNot2)){
        result = `Ну ... сумма = ${numberOrNot1 +numberOrNot2}`
    }
    output.innerText = result
})