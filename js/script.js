/**
 * Created by Iren_M on 27.10.2016.
 */


/*ОТКРЫТЬ - ЗАКРЫТЬ*/

/*Цена - диапазон цен*/
$(document).ready(function(){
    $('.price-box').click(function(){
        $('#options').toggle();
    });
});

/*Каталог товаров - меню*/
$(document).ready(function(){
    $('.main-item').click(function(){
        $('.sub-menu').toggle();
    });
});

/*Номер детали - search*/
$(document).ready(function(){
    $('.number').click(function(){
        $('.options').toggle();
    });
});

/*Каталог-продукция - кнопка info*/
$(document).ready(function(){
    $('.product-info').click(function(){
        $(this).parent().toggleClass('active');
    });
    $('.close').click(function(){
        $(this).parents().removeClass('active');
    });
});

/*Обратный звонок*/
$(document).ready(function(){
    $('.call-me-back').click(function(){
        $('.call-back').show();
    });
    $('.close-call-back').click(function(){
        $('.call-back').hide();
    });
});

/*Обратный звонок 2*/
$(document).ready(function(){
    $('.company-call-me').click(function(){
        $('.call-back').show();
    });
    $('.close-call-back').click(function(){
        $('.call-back').hide();
    });
});

/*Стать поставщиком*/
$(document).ready(function(){
    $('.be-provider').click(function(){
        $('.provider').show();
    });
    $('.close-provider').click(function(){
        $('.provider').hide();
    });
});

/*Стать оптовиком*/
$(document).ready(function(){
    $('.be-wholesaler').click(function(){
        $('.wholesaler').show();
    });
    $('.close-wholesaler').click(function(){
        $('.wholesaler').hide();
    });
});

/*Войти в аккаунт*/
$(document).ready(function(){
    $('.enter-button').click(function(){
        $('.enter').show();
    });
    $('.close-enter').click(function(){
        $('.enter').hide();
    });
});

/*Скрытая информация продукта*/
$(document).ready(function(){
    $('.product-search').click(function(){
        $('.detail').toggleClass('active');
    });
    $('.close-detail').click(function(){
        $('.detail').removeClass('active');
    });
    $('.close-button').click(function(){
        $('.detail').removeClass('active');
    });
});


/*СЕЛЕКТЫ*/

$(document).ready(function(){
    $("select").selecter();
});


/*СЛАЙДЕРЫ*/


/*Слайдер колеса с мин.копиями*/
$(document).ready(function(){
    $('.slide-image').slick({
        arrows: false,
        fade: true,
        asNavFor: '.slide-image2'
    });
    $('.slide-image2').slick({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        asNavFor: '.slide-image',
        focusOnSelect: true
    });
});

/*Верхний слайдер с аккумуляторами*/
$(document).ready(function(){
    $('.top-slider').slick({
        slidesToShow: 3
    });
});

/*Внутренний слайдер*/
$(document).ready(function(){
    $('.inside-slider').slick({
        dots: true,
        arrows: false
    });
});

/*Основной большой слайдер*/
$(document).ready(function(){
    $('.big-slider').slick({
        dots: true
    });
});


/*Внутренний слайдер о компании*/
$(document).ready(function(){
    $('.company-slider').slick({
        arrows: false,
        dots: true
    });
});
