const getUserInput = document.getElementById('input')

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {

    const value = getUserInput.value
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("P A L I N D R O M E")
    }else{
        alert("Not today")
    }
    
    input.value = ""
}
