document.addEventListener('click', function(event) {
  var dropdowns = document.getElementsByClassName('dropdown-c');
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show') && !openDropdown.parentNode.contains(event.target)) {
      openDropdown.classList.remove('show');
    }
  }
});

document.querySelectorAll('.hamburger').forEach(function (dropdown) {
  dropdown.addEventListener('click', function () {
    this.querySelector('.dropdown-c').classList.toggle('show');
  });
});
