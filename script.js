// menu desplegable
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('divmenu');
    const navUl = document.getElementById('nav-ul');

    mobileMenuButton.addEventListener('click', function() {
        // Toggle the visibility of the navigation menu
        if (navUl.style.display === 'block') {
            navUl.style.display = 'none';
        } else {
            navUl.style.display = 'block';
        }
    });
});


// imagenes desplegables - imagenes desplegables - imagenes desplegables -  
// function toggleImages(event, imageId) {
//     var image = document.getElementById(imageId);
//     var button = event.target;
//     if (image.style.display === 'none') {
//       image.style.display = 'block';
//       button.innerHTML = 'Ocultar imagenes';
//     } else {
//       image.style.display = 'none';
//       button.innerHTML = 'Ver imagenes';
//     }
//   }

function toggleImages(event, imageId) {
  var images = document.querySelectorAll('[id^="' + imageId + '"]');
  var button = event.target;
  if (images[0].style.display === 'none') {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'block';
    }
    button.innerHTML = 'Ocultar imagenes';
  } else {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    button.innerHTML = 'Ver imagenes';
  }
}

// Hide images when page loads
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].style.display = 'none';
}