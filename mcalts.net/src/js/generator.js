var prevAccs = document.getElementsByClassName("prevAcc-container");
var prevAccsTop = document.getElementsByClassName("prevAcc-container");
Array.from(prevAccs).forEach(prevAcc => {
    var arrow = prevAcc.getElementsByClassName("arrow-svg")[1];
    var arrow2 = prevAcc.getElementsByClassName("arrow-svg")[0];
    prevAcc.addEventListener("click", function() {
        var clicked = this.getAttribute("clicked");
        if (clicked != "open") {
            Array.from(prevAccs).forEach(prevAcc => {
                prevAcc.style.removeProperty("height");
                prevAcc.setAttribute("clicked", "closed");
                prevAcc.getElementsByClassName("arrow-svg")[1].style.transform = "rotate(0deg)";
                prevAcc.getElementsByClassName("arrow-svg")[0].style.transform = "rotate(0deg)";
                prevAcc.getElementsByClassName("load")[0].innerHTML = "Expand";
            });
            this.setAttribute("clicked", "open");
            if (window.innerWidth > 400) {
                this.style.height = "194px";
            } else {
                this.style.height = "165px";
            }
            this.style.overflow = "visible";
            this.querySelector("#load").innerHTML = "Collapse";
            arrow.style.transform = "rotate(-90deg)";
            arrow2.style.transform = "rotate(-90deg)";
        } else if (clicked == "open") {
            arrow.style.transform = "rotate(0deg)";
            arrow2.style.transform = "rotate(0deg)";
            this.setAttribute("clicked", "closed");
            this.style.removeProperty("height");
            this.querySelector("#load").innerHTML = "Expand";
        }
    });
});
const url = window.location.search;
if (url.includes("import")) {
    const importElement = document.getElementById("popup");
    importElement.style.display = "block";
}