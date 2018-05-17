$(function() {

    var $modalThank = $("#thankModal");

    $("#form_call").validate({
        invalidHandler: function(e, validator) {
            var errors = validator.numberOfInvalids();

        },
        onkeyup: false,
        submitHandler: function(form) {
           var $form = $("#form_call");
           var name = $form.find('input[name=name]').val();
           var phone = $form.find('input[name=phone]').val();

            $.ajax({
                url: '/app/ajax/send_telegram.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    name: name,
                    phone: phone,
                    title: "Заказ обратного звонка"
                },
                success: function(data){
                    $modalThank.modal("show");
                    $("#callbackModal").modal('hide');
                },
                error: function (data) {
                    alert("Произошла ошибка при отправке, попробуйте еще раз");
                }
            });
        },
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                minlength: 18,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "",
            phone: ""
        },
        debug: true
    });


    $("#form_price").validate({
        invalidHandler: function(e, validator) {
            var errors = validator.numberOfInvalids();

        },
        onkeyup: false,
        submitHandler: function(form) {
            var $form = $("#form_price");
            var name = $form.find('input[name=name]').val();
            var phone = $form.find('input[name=phone]').val();
            var email = $form.find('input[name=email]').val();

            $.ajax({
                url: '/app/ajax/send_telegram.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    title: "Получение прайса"
                },
                success: function(data){
                    $modalThank.modal("show");
                    $("#priceModal").modal('hide');
                },
                error: function (data) {
                    alert("Произошла ошибка при отправке, попробуйте еще раз");
                }
            });
        },
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                minlength: 18,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "",
            phone: ""
        },
        debug: true
    });


    $("#form_pres").validate({
        invalidHandler: function(e, validator) {
            var errors = validator.numberOfInvalids();

        },
        onkeyup: false,
        submitHandler: function(form) {
            var $form = $("#form_pres");
            var name = $form.find('input[name=name]').val();
            var phone = $form.find('input[name=phone]').val();
            var email = $form.find('input[name=email]').val();

            $.ajax({
                url: '/app/ajax/send_telegram.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    title: "Получение презентации"
                },
                success: function(data){
                    $modalThank.modal("show");
                    $("#presentModal").modal('hide');
                },
                error: function (data) {
                    alert("Произошла ошибка при отправке, попробуйте еще раз");
                }
            });
        },
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true,
                minlength: 18,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "",
            phone: ""
        },
        debug: true
    });


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
