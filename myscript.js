//jQuery allowed??
//$(document).ready(function() { /** code inside **/});

window.onload = function(){  
    var numRows = document.querySelectorAll("#myNumList li");
    var i;
    for (i = 0; i < numRows.length; i++) {
        if ((i + 1) % 2 > 0) {
            numRows[i].classList.toggle("odd");
        }
        
        //if addEventListener is not supported -> use attachEvent
        numRows[i].addEventListener("click", selected);

        //Extra task; displaying digit
        var digitNode = document.createElement("span");
        digitNode.innerText = (i + 1).toString();
        digitNode.classList.add("digit");
        numRows[i].appendChild(digitNode);
    }
}

function selected() {
    this.classList.toggle("selected");

    refreshTotalSelected();
}

function refreshTotalSelected() {
    var numRows = document.querySelectorAll("#myNumList .selected");

    var totalSelectedNode = document.querySelector(".total-selected");
    totalSelectedNode.innerHTML = numRows.length;
}

