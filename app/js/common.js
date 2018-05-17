$(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 1,
        dots: false,
        responsive: {
            992: {
                dots: true
            }
        }
    });


    $("#showCallback").on('click', function () {
        var $modal = $("#callbackModal");
        $modal.modal('show');
    });

    $(".pressBtnJs").on('click', function () {
        var $modal = $("#presentModal");
        $modal.modal('show');
    });

    $(".priceModal").on('click', function () {
        var $modal = $("#priceModal");
        $modal.modal('show');
    });



    $('.phone').mask('+7 (000) 000-00-00');

});
