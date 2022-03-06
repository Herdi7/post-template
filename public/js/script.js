$(document).ready(function() {
    $('#nav-toogle :checkbox').change(function() {
        if (this.checked) {
            $('#navbar').addClass('left-0');
            $('#navbar').removeClass('-left-96')
            $('body').addClass('overflow-hidden')
        } else {
            $('#navbar').removeClass('left-0');
            $('#navbar').addClass('-left-96')
            $('body').removeClass('overflow-hidden')
        }
    });

});