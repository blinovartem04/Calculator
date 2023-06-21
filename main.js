let outputscreen = document
    .getElementById("outputscreen")
let count = 0;
function display(num) {
    outputscreen.value += num
}
function Calculate() {
    try {
        outputscreen.value = eval
            (outputscreen.value);

    }
    catch (err) {
        alert("Ошибка, проверьте введенные значения!")
    }
}
function Clear() {
    outputscreen.value = "";

}
function del() {
    outputscreen.value = outputscreen.value
        .slice(0, -1)
}

