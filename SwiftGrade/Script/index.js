window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgb(216, 160, 20)';
      navbar.style.padding = '10px 0'
    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.padding = '30px 0';
    }
  });
  