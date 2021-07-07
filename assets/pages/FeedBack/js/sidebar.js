
const logo = document.querySelector('a.nav__logo');

const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)
    var logoActive = false

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
            trocarLogo();
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
            if(logoActive){
                trocarLogo(false);
                logoActive = false;
            }else{
                trocarLogo(true);
                logoActive = true;
            }
        })
    }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
/*===== LINK active-siderbar  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function trocarLogo(logoActive) {
    if (logoActive) {
        logo.innerHTML = `<img src="../../icons/listfy-logo-white.svg"/>`
    } else {
        logo.innerHTML = `<img src="../../icons/listfy-logo-retraida-white.svg" style="width:55px !important; margin:10px auto 0 10px !important;"/>`
        localStorage.setItem('logo', true);
    }
}
function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active-siderbar'))
        this.classList.add('active-siderbar')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))