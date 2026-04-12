// Toggle Mode Dark-Mode //

const idtoggletheme = document.getElementById('toggle-mode');

localStorage.getItem('theme') === 'dark' ?
    (document.body.classList.add('dark'), idtoggletheme.innerHTML = '<i class="fa-regular fa-moon"></i> Darkz') :
    (idtoggletheme.innerHTML = '<i class="fa-regular fa-sun"></i> Light');

idtoggletheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    document.body.classList.contains('dark') ?
        (localStorage.setItem('theme', 'dark'), idtoggletheme.innerHTML = '<i class="fa-regular fa-moon"></i> Darkz') :
        (localStorage.setItem('theme', 'light'), idtoggletheme.innerHTML = '<i class="fa-regular fa-sun"></i> Light');
});

// Contact //

document.getElementById('toggle-contact').addEventListener('click', () => {
    document.querySelector('.icn-contact-arw').classList.toggle('rotate');
    document.querySelector('.icn-contact-items').classList.toggle('dis');
});

document.getElementById('btn-contact').addEventListener('click', () => {
    document.querySelector('.icn-contact-items').classList.toggle('dis');
});

// Scroll To Id//

function scrolltoId(idtarget) {
    const elmn = document.getElementById(idtarget);
    elmn ? elmn.scrollIntoView(
        {
            behavior: 'smooth'
        }
    ) :
        '';
}

// Search Items // 

const classearchitems = document.querySelectorAll('.search-items');
const inputsearchitems = document.querySelectorAll('#input-search-items');
const idcrtsearch = document.getElementById('cr-searchnw');
const idtgsearch = document.getElementById('toggle-search');
const icntgsearch = document.getElementById('icon-toggle-search');
const icnarw = document.querySelector('.icn-arw');
const slidebottom = document.querySelector('.slide-bottom');

/*
inputsearchitems.addEventListener('click', () => {
    slidebottom.classList.add('bottom');
    icnarw.classList.add('icn-rotate180deg');
});
*/
idtgsearch.addEventListener('click', () => {
    slidebottom.classList.toggle('bottom');
    icnarw.classList.toggle('icn-rotate180deg');
});

inputsearchitems.forEach(inp => {
    inp.addEventListener('input', () => {
        const filter = inp.value.toLowerCase();

        classearchitems.forEach(card => {
            const elementh3 = [...card.querySelectorAll('h3, h4')]
                .map(evt => evt.textContent.toLowerCase())
                .join(' ');

            card.classList.toggle('hidden', !elementh3.includes(filter));
        });
    });
});

// Show Reveal //

const reveal = document.querySelectorAll('.reveal');
const revealright = document.querySelectorAll('.reveal-right');
const revealrighttrs1s = document.querySelectorAll('.reveal-right-trs-1s');
const revealrighttrs1t2s = document.querySelectorAll('.reveal-right-trs-1t2s');
const obser = new IntersectionObserver((element) => {
    element.forEach((elementnew) => {
        if (elementnew.isIntersecting) {
            elementnew.target.classList.add('rev');
        }
    });
});

reveal.forEach((reveal) => {
    obser.observe(reveal);
});

revealright.forEach((revealright) => {
    obser.observe(revealright)
});

revealrighttrs1s.forEach((revealrighttrs1s) => {
    obser.observe(revealrighttrs1s)
});

revealrighttrs1t2s.forEach((revealrighttrs1t2s) => {
    obser.observe(revealrighttrs1t2s)
});
// Button Chart //

const btnchart = document.querySelectorAll('#btn-cart');
const itembtncart = document.querySelectorAll('#addtocart');
const slideright = document.querySelector('.slide-right');

btnchart.forEach(btn => {
    btn.addEventListener('click', () => {
        slideright.classList.add('right');
    });
});

itembtncart.forEach(btn => {
    btn.addEventListener('click', () => {
        slideright.classList.add('right');
    });
});

const asidecart = document.getElementById('asidecart');
const closecart = document.getElementById('close-cart');
document.addEventListener('click', (evt) => {
    if (closecart.contains(evt.target)) {
        slideright.classList.remove('right');
    }
});

/*closechart.addEventListener('click', () => {
    slideright.classList.remove('right');
});*/

// Button Show //

const btnitems = document.querySelectorAll('.btn-items');
const searchitems = document.querySelectorAll('.search-items');
const triggerclsbgwhite = document.querySelectorAll('.trigger-bg-white');
const clsbgwhite = document.querySelectorAll('.bg-white');

btnitems.forEach(btn => {
    btn.addEventListener('click', () => {
        const databtnitems = btn.getAttribute('data-filter');

        btnitems.forEach(b =>
            b.classList.remove('dark'));

        btn.classList.add('dark');

        searchitems.forEach(card => {
            const datasearchitems = card.getAttribute('data-category');

            if (databtnitems === 'all' || databtnitems === datasearchitems) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }

        });
    });
});