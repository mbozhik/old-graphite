const anchorLink = document.querySelector('a[href="#OPENING"]')

anchorLink.addEventListener('click', function (event) {
  event.preventDefault()

  const targetElement = document.getElementById('OPENING')

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    })
  }
})
