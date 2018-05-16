$(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1
    });


    $("#showCallback").on('click', function () {
        var $modal = $("#callbackModal");
        $modal.modal('show');
    });

    $('.phone').mask('+7 (000) 000-00-00');

});
