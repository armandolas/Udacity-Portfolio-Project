function smoothScrollingTo(target) {

    $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        },
        Math.abs(window.scrollY - $(this.hash).offset().top) * 50);
}
$('a[href*=\\#]').on('click', function (event) {
    event.preventDefault();
    smoothScrollingTo(this.hash);
});
$(document).ready(function () {
    smoothScrollingTo(location.hash);
});