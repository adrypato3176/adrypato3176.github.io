

/*---------------------------[Table of contents]------------------------

* 01.Variables
* 02.add sticky class to header and Scroll Top Btn
* 03.NavMenu
-------------------------------------------------------------------*/

/* --------------------------------{01.Variables}----------------------------- */

var header = document.getElementById("header"),
    navBtn = document.getElementById("toggle-btn"),
    closeBtn = document.getElementById("close-btn"),
    nav = document.getElementById("nav"),
    navLink = nav.querySelectorAll(".nav-link"),
    totalNavlink = navLink.length,
    scrollBtn = document.getElementById("scroll-top-btn");

/* -------------{ 02.Add sticky class to header and Scroll Top Btn}------------*/

function scroll_Fun() {
    'use strict';
    window.onscroll = function () {
        'use strict';
        var scrolTop = this.scrollY;
        if (scrolTop > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        if (scrolTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }
};


scroll_Fun();

/* --------------------------------{03.NavMenu}----------------------------- */


function menu_Fun() {
    'use strict';
    navBtn.onclick = function () {
        'use strict';
        nav.classList.add("nav-show");
    };
    closeBtn.onclick = function () {
        'use strict';
        nav.classList.remove("nav-show");
    };

    for (let i = 0; i < totalNavlink; i++) {
        navLink[i].onclick = function () {
            'use strict';
            nav.classList.remove("nav-show");
        }

    }

};

menu_Fun();