$(document).ready(function () {

    if (!$('.email-address').val()) {
        alert('Enter email!')
    } else {
        $('.subscribe').on('click', function () {
            $('.flex-credit').css("display", "flex");
        })
    }

    $('.email-add').submit(function (event) {
        event.preventDefault();
        if (!$('.cardnumber').val() && !$('.mounth').val() && !$('.year').val() && !$('.cvv').val()) {
            alert('not money');
        } else {
            var msg1 = $('.email-add').serialize();
            $.ajax({
                url: "server.php",
                type: "POST",
                data: msg1,
                beforeSend: function () {
                    $('*').css("cursor", "wait");
                },
                success: function () {
                    $('.email-address').val('');
                    $('.close').on('click', function () {
                        $('.flex-credit').hide();
                    })
                }
            });
        }
    })

    $('.input-info').submit(function (event) {
        event.preventDefault();
        if (!$('.name2').val() && !$('.mail').val() && !$('.message').val()) {
            alert('fuck');
        } else {
            var msg2 = $('.input-info').serialize();
            $.ajax({
                url: "server.php",
                type: "POST",
                data: msg2,
                beforeSend: function () {
                    $('*').css("cursor", "wait");
                },
                success: function () {
                    $('.name2').val('');
                    $('.mail').val('');
                    $('.message').val('');
                }
            });
        };
    });
})
