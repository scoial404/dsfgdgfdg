document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

function expandNavgation() {
    let navgation = document.querySelector(".header .main-navgation");
    let toggleMenu = document.querySelector(".header .burger-menu");
    let icon = toggleMenu.querySelector(".icon");
    let closed = true;
    var burger = document.querySelector("#burger");
    var pathArrow = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
    var pathBurger = "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
    toggleMenu.addEventListener("click", () => {
        if (icon.classList.contains("fa-bars")) {
            icon.className = "fa-regular fa-xmark icon";
        } else {
            icon.className = "fa-regular fa-bars icon";
        }
        let navgationHeight = navgation.scrollHeight;
        if (closed) {
            navgation.style.height = `fit-content`;
            burger.setAttribute("d", pathArrow);
        } else {
            navgation.style.height = "";
            burger.setAttribute("d", pathBurger);
        }
        closed = !closed;
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
            icon.className = "fa-regular fa-bars icon";
            navgation.style.height = "";
            closed = true;
        }
    });
}
expandNavgation();
var sunPath = "M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 C 11.134 8 8 11.134 8 15 C 8 18.866 11.134 22 15 22 C 18.866 22 22 18.866 22 15 C 22 11.134 18.866 8 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"
var moonPath = "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
    if (document.body.classList.contains("lightmode")) {
        document.cookie = "mode=lightmode";
        mode.querySelector('svg path').setAttribute('d', moonPath);
        mode.querySelector('svg').setAttribute('viewBox', "0 0 384 512");
    } else {
        mode.querySelector('svg path').setAttribute('d', sunPath);
        mode.querySelector('svg').setAttribute('viewBox', "0 0 30 30");
        document.cookie = "mode=darkmode";
    }
});
window.addEventListener("load", function() {
    lightmode();
});

function lightmode() {
    if (document.cookie.includes("mode=lightmode")) {
        document.body.classList.add("lightmode");
        mode.querySelector('svg path').setAttribute('d', moonPath);
        mode.querySelector('svg').setAttribute('viewBox', "0 0 384 512");
    } else {
        document.body.classList.remove("lightmode");
        mode.querySelector('svg path').setAttribute('d', sunPath);
        mode.querySelector('svg').setAttribute('viewBox', "0 0 30 30");
    }
}
Array.from(document.getElementsByClassName("parent-tab")).forEach(tab => {
    tab.querySelector("label").addEventListener("click", () => {
        var open = tab.getAttribute("opened");
        if (open != "open") {
            Array.from(document.getElementsByClassName("parent-tab")).forEach(tab => {
                tab.querySelector(".content").style.maxHeight = "0px";
                tab.querySelector("label").style.borderRadius = "8px";
                tab.setAttribute("opened", "closed");
            });
            tab.querySelector(".content").style.maxHeight = tab.querySelector(".content").scrollHeight + "px";
            tab.querySelector("label").style.borderRadius = "8px 8px 0 0";
            tab.setAttribute("opened", "open");
        } else if (open == "open") {
            tab.querySelector(".content").style.maxHeight = "0px";
            tab.querySelector("label").style.borderRadius = "8px";
            tab.setAttribute("opened", "closed");
        }
    });
});
let cookiePopUp = document.getElementById("cookiePopup");
document.getElementById("acceptCookie").addEventListener("click", () => {
    let d = new Date();
    d.setMinutes(43800 + d.getMinutes());
    document.cookie = "cookies=accepted; expires = " + d + ";";
    cookiePopUp.classList.add("hide");
    cookiePopUp.classList.remove("show");
});
const checkCookie = () => {
    if (document.cookie.includes("cookies=accepted")) {
        cookiePopUp.classList.add("hide");
        cookiePopUp.classList.remove("show");
    } else {
        cookiePopUp.classList.add("show");
        cookiePopUp.classList.remove("hide");
    }
};
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};
var alertBox = function(id, option) {
    this.show = function(msg) {
        if (msg === '' || typeof msg === 'undefined' || msg === null) {
            throw '"msg parameter is empty"';
        } else {
            var alertArea = document.querySelector(id);
            var alertBox = document.createElement('DIV');
            var alertContent = document.createElement('DIV');
            var alertClose = document.createElement('A');
            var alertClass = this;
            alertContent.classList.add('alert-content');
            alertContent.innerText = msg;
            alertClose.classList.add('alert-close');
            alertClose.setAttribute('href', '#');
            alertBox.classList.add('alert-box');
            alertBox.appendChild(alertContent);
            if (!option.hideCloseButton || typeof option.hideCloseButton === 'undefined') {
                alertBox.appendChild(alertClose);
            }
            alertArea.appendChild(alertBox);
            alertClose.addEventListener('click', function(event) {
                event.preventDefault();
                alertClass.hide(alertBox);
            });
            if (!option.persistent) {
                var alertTimeout = setTimeout(function() {
                    alertClass.hide(alertBox);
                    clearTimeout(alertTimeout);
                }, option.closeTime);
            }
        }
    };
    this.hide = function(alertBox) {
        alertBox.classList.add('hide');
        var disperseTimeout = setTimeout(function() {
            alertBox.parentNode.removeChild(alertBox);
            clearTimeout(disperseTimeout);
        }, 500);
    };
};
var alertbox = new alertBox('#alert-area', {
    closeTime: 5000,
    persistent: false,
    hideCloseButton: false
});

function showAlert(text) {
    alertbox.show(text);
}