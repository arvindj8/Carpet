$(document).ready(function(){
    $('.carousel__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></img></button>',
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    
    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

    //Validation forms

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5
                },
                phone: "required",
            },
            messages: {
                name: {
                    required: "Пожалуйста, ввежите ваше имя",
                    minlength: jQuery.validator.format("Введите {0} символов")
                },
                phone: "Пожалуйста, введите ваш телефон",
            }
        });
    }

    validateForms('#consultation-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");


    //hamburger

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            });
        });
    });

    //submit form in mail
    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }


        $.ajax({
            type: "POST",
            url: "mailer/telegram.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

     //add animate wow.js
     new WOW().init();
});