/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu show
if(navToggle){
    navToggle.addEventListener("click", ()=> {
        navMenu.classList.add("show_menu");
    })
}

// Menu hidden
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show_menu");
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach(n => {
    n.addEventListener("click", () => {
        navMenu.classList.remove("show_menu");
    })
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById("header")
    //when scroll is greater than 50 viewport height add the scroll header class
    this.scrollY >= 50 ? header.classList.add("bg-header")
                       : header.classList.remove("bg-header")
}
window.addEventListener("scroll", scrollHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = ()=>{
    const scrollUp = document.getElementById("scroll-up");
    //when scroll is higher than 350 viewport height, add show-scroll class to the website 
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(".nav_menu a[href*=" + sectionId + "]");

        if (sectionsClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add("active-link");
            } 
            else {
                sectionsClass.classList.remove("active-link");
            }
        }
    });
}

window.addEventListener("scroll", scrollActive);


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
})

sr.reveal(".home_img, .newsletter_container, .footer_logo, .footer_description, .footer_content, .footer_info");
sr.reveal(".home_data", {origin: "bottom"});
sr.reveal(".about_data, .recently_data",  {origin: "left"});
sr.reveal(".about_img, .recently_img", {origin: "right"});
sr.reveal(".popular_card", {interval: 100});