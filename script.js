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
