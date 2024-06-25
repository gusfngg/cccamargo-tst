window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection () {
  const targetline = scrollY + innerHeight / 2
}

function showNavOnScroll() {
  const navigation = document.querySelector("#navigation")

  if (scrollY > 1) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
} 

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .cards .card,
  #services .cards .card img,
  #about, 
  #about header, 
  #about .content,
  #contact,
  #contact header,
  #contact .content,
  footer,
  footer p
`)