let navbarNav = document.getElementById('navbar-nav')
let navActive = navbarNav.getElementsByClassName('nav-link')

for(let i = 0; i < navActive.length; i++) {
    navActive[i].addEventListener('click', function() {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}