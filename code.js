function turngreen() {
    var dioda = document.getElementById("dioda");
    dioda.setAttribute("style", "background:green");
}

function turnred() {
    var dioda = document.getElementById("dioda");
    dioda.setAttribute("style", "background:red");
}

function addToList() {
    var lista = document.getElementById("lista");
    var nowy = document.getElementById("nowyElement").value;
    newLi = document.createElement("li");
    newLi.innerHTML = nowy;
    lista.appendChild(newLi);
}

function setUpShowContent() {
    var content = document.getElementById("showContent");
    var showButton = document.getElementById("showButton");

    showButton.onclick = function() {
        if (content.className == "open") {
            //shrink the box
            content.className = "";
            showButton.innerHTML = "Pokaż więcej";
        } else {
            //expand the box
            content.className = "open";
            showButton.innerHTML = "Pokaż mniej";
        }
    };
}

function setUpTimer() {
    var colorChanger = document.getElementById("timerTest");
    var colors = ["red", "green", "blue"];
    var counter = 0;

    function changeColor() {
        if (counter >= colors.length) counter = 0;
        colorChanger.style.background = colors[counter];
        counter++;
    }

    var myTimer = setInterval(changeColor, 2000);

    colorChanger.onclick = function() {
        clearInterval(myTimer);
        colorChanger.innerHTML = "zatrzymano timer";
    };
}

function setUpFocus() {
    var focus = document.getElementById("nowyElement");
    focus.onfocus = function() {
        focus.style.border = "4px solid pink";
    };
    focus.onblur = function() {
        focus.style.border = "none";
    };
}

window.onload = function() {
    setUpShowContent();
    setUpTimer();
    setUpFocus();
};
