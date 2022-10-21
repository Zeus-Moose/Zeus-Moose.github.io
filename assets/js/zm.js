body.classList.remove("noscript");

Array.from(document.querySelectorAll('.message')).forEach(item => {
    item.addEventListener('click', () => {
        item.style.display = "none";
    })
});

// Replace SVGs with inline versions
Array.from(document.getElementsByClassName("svg")).forEach(item => {
    fetch(item.src)
        .then(data => {return data.text()})
        .then(image => {
            item.outerHTML = image;
            item.classList.add("svg-loaded");
        })
});

// Prepend HR with custom SVG
Array.from(document.getElementsByClassName("zeus-moose-hr")).forEach(item => {
    fetch(baseRoot + '/assets/img/zeus_moose_looking.svg')
        .then(data => {return data.text()})
        .then(image => {
            item.innerHTML = image;
            item.classList.add("svg-loaded");
        })
});

let hashTagActive = "";
let menuItems = document.querySelector("body.portfolio nav#main .scroll");
if (menuItems) {
    menuItems.addEventListener("click", (item) => {
        console.log(item.target.hash);
        if (hashTagActive !== item.target.hash && document.querySelector(item.target.hash)) {
            event.preventDefault();
            document.querySelector(item.target.hash).scrollIntoView({behavior: "smooth"});
            hashTagActive = this.hash;
        }
    });
}

let blinkTimeout;
let whoBlinked = "zeus";

function blink() {
    let rand = Math.round(Math.random() * 6000) + 3000;
    blinkTimeout = setTimeout(function () {
        if (whoBlinked === "moose") {
            body.classList.remove('blink-moose');
            body.classList.add('blink-zeus');
            whoBlinked = "zeus";
        } else {
            body.classList.add('blink-moose');
            body.classList.remove('blink-zeus');
            whoBlinked = "moose";
        }
        blink();
    }, rand);
}

blink();

// Wait for AJAX to load in SVGs
// setTimeout(() => {
//     document.getElementById('logo-zeus').addEventListener('mouseenter', () => {
//         body.classList.remove('blink-moose');
//         body.classList.add('blink-zeus');
//         clearTimeout(blinkTimeout);
//         whoBlinked = "zeus";
//         blink();
//     });
//     document.getElementById('logo-moose').addEventListener('mouseenter', () => {
//         body.classList.remove('blink-zeus');
//         body.classList.add('blink-moose');
//         clearTimeout(blinkTimeout);
//         whoBlinked = "moose";
//         blink();
//     });
// }, 1000);

var menuTimer;
Array.from(document.querySelectorAll('.mobile-menu-toggle')).forEach(item => {
    var menu = document.getElementById(item.dataset.menu);
    item.addEventListener('click', () => {
        menu.addEventListener('mouseleave', () => {
            clearTimeout(menuTimer);
            menuTimer = setTimeout(function () {
                menu.classList.remove('show');
            }, 500);
        });
        menu.addEventListener('mouseenter', () => {
            clearTimeout(menuTimer);
        });
        menu.classList.toggle('show');
    })

    // This is a bit messy (it's so the menu doesn't close if you hover back over the menu icon),
    // can it be better integrated into a single thing?
    item.addEventListener('mouseleave', () => {
        clearTimeout(menuTimer);
        menuTimer = setTimeout(function () {
            menu.classList.remove('show');
        }, 500);
    });
    item.addEventListener('mouseenter', () => {
        clearTimeout(menuTimer);
    });
});
let homepageVideos = [];
let curVideo = -0;

Array.from(document.querySelectorAll('.mini_block .section_image > video')).forEach((item, index) => {
    homepageVideos[index] = item;
    let card = item.parentNode.parentNode;
    let intro = card.getElementsByClassName('intro')[0];
    item.addEventListener('ended', () => {
        item.currentTime = 0;
        if (card.classList.contains('active-video')) {
            item.play();
        } else {
            playNext();
        }
    });

    item.parentNode.parentNode.addEventListener('mouseenter', () => {
        intro.style.height = intro.scrollHeight + 'px';
        card.classList.add('active-video');
        curVideo = index - 1;
        pauseAll();
        playNext();
    })
    item.parentNode.parentNode.addEventListener('mouseleave', () => {
        intro.style.height = '0px';
        card.classList.remove('active-video');
    })
});

curVideo = homepageVideos.length;
if (homepageVideos.length) {
    playNext()
}

function playNext() {
    curVideo++;
    if (curVideo >= homepageVideos.length) {
        curVideo = 0;
    }
    // if (isNaN(homepageVideos[curVideo].duration)) {
    //     curVideo++;
    // }
    homepageVideos[curVideo].play();
}

function pauseAll() {
    homepageVideos.forEach(function (item, index) {
        item.pause();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let modalWrapper = document.createElement('div');
    modalWrapper.id = 'modalWrapper';
    let modal = document.createElement('div');
    modal.classList.add('modal');
    modalWrapper.appendChild(modal);
    body.appendChild(modalWrapper);

    modalWrapper.addEventListener('click', () => {
        modalWrapper.classList.remove('modalOpen');
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            modalWrapper.classList.remove('modalOpen');
        }
    });

    Array.from(document.querySelectorAll('.gallery a')).forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let image = document.createElement('img');
            image.src = item.href
            let caption = document.createElement('p');
            caption.innerText = item.title;
            modal.innerHTML = '';
            modal.appendChild(image);
            modal.appendChild(caption);
            modalWrapper.classList.add('modalOpen');
        })
    });
});