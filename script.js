document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    Submit();
});

document.getElementById("clearBtn").addEventListener("click", clearResult);

function Submit() {
    let num = document.getElementById("number").value;
    if (num % 2 === 0) {
        document.getElementById("result").innerHTML = num + " is an even number.";
    } else {
        document.getElementById("result").innerHTML = num + " is an odd number.";
    }
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}
