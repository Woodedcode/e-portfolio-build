// Template ID - template_e7j1vv6
// service ID - service_5qjgtvp
// Public Key - fC0FxDGSSQgqJSAY0
let isModalOpen = false;
let contrastToggle = false;
const aboutLink = document.getElementById("about-link");
const scaleFactor = 1 / 20;



// ABOUT ME NAV
aboutLink.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal();
});

// DARK MODE
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

// BACKGROUND MOVEMENT
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
    }
}

// MODAL
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');

    emailjs
        .sendForm(
            'service_5qjgtvp',
            'template_e7j1vv6',
            event.target,
            'fC0FxDGSSQgqJSAY0'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList.add('modal__overlay--visible');
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert('The email service is temporarily unavailable. Please contact me directly on Rwoods1835@gmail.com');
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
    }
    // toggle modal
    isModalOpen = !isModalOpen;
    document.body.classList.add("modal--open");
}