$(document).ready(function() {
    // feather icons replace
    feather.replace()

    // navbar
    const navbarNav = $('#navbar-nav')
    const nav = $('nav')
    $('#nav-toggle:checkbox').change(function() {
        if (this.checked) {
            navbarNav.removeClass('-translate-x-full')
            $('body').addClass(' overflow-y-hidden')
        } else {
            navbarNav.addClass('-translate-x-full')
            $('body').removeClass(' overflow-y-hidden')
        }
    })

    $(document).scroll(function() {
        if ($(this).scrollTop() > 71) {
            nav.fadeOut();
        } else {
            nav.fadeIn().css({ "position": "fixed", "top": "0" });
        }
    })














})