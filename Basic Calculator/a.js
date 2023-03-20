function sum() {
    var n1 = document.getElementById("Number1").value
    var n2 = document.getElementById("Number2").value
    var a = document.getElementById("Ans")
    var letters = /[A-Za-z]+$/;
    if (n1 == "" || n2 == "") {
        alert("No input entered")
    } else if (n1.match(letters) || n2.match(letters)) {
        alert("Enter numbers only")
    } else {
        var s = parseInt(n1) + parseInt(n2)
    }
    a.value = s;
}

function dif() {
    var n1 = document.getElementById("Number1").value
    var n2 = document.getElementById("Number2").value
    var a = document.getElementById("Ans")
    var letters = /[A-Za-z]+$/;
    if (n1 == "" || n2 == "") {
        alert("No input entered")
    } else if (n1.match(letters) || n2.match(letters)) {
        alert("Enter numbers only")
    } else {
        var d = parseInt(n1) - parseInt(n2)
    }
    a.value = d;
}

function mul() {
    var n1 = document.getElementById("Number1").value
    var n2 = document.getElementById("Number2").value
    var a = document.getElementById("Ans")
    var letters = /[A-Za-z]+$/;
    if (n1 == "" || n2 == "") {
        alert("No input entered")
    } else if (n1.match(letters) || n2.match(letters)) {
        alert("Enter numbers only")
    } else {
        var m = parseInt(n1) * parseInt(n2)
    }
    a.value = m;
}

function divi() {
    var n1 = document.getElementById("Number1").value
    var n2 = document.getElementById("Number2").value
    var a = document.getElementById("Ans")
    var letters = /[A-Za-z]+$/;
    if (n1 == "" || n2 == "") {
        alert("No input entered")
    } else if (n1.match(letters) || n2.match(letters)) {
        alert("Enter numbers only")
    } else if (n2 == "0") {
        alert("Division Error")
    } else {
        var di = parseInt(n1) / parseInt(n2)
    }
    a.value = di;
}
object.onclick = function() { fun };