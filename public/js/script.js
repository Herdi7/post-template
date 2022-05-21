$(document).ready(function() {
    feather.replace()
    $('#nav-toggle:checkbox').change(function() {
        const navbarNav = $('#navbar-nav')
        if (this.checked) {
            navbarNav.removeClass('-translate-x-96')
            $('body').addClass('overflow-hidden')
        } else {
            navbarNav.addClass('-translate-x-96')
            $('body').removeClass('overflow-hidden')
        }
    });


});