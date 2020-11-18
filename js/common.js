$(document).ready(function(){
    //_____начало Ajax обаработки____

        $("#btn").click(function(e){
            e.eventDefault;
            sendAjaxForm('result_form', 'ajax_form', 'zakaz.php');
            return false; 
            
        });

        function sendAjaxForm(result_form, ajax_form, url) {
            $.ajax({
                url:    url, //url страницы (action_ajax_form.php)
                type:     "POST", //метод отправки
                dataType: "html", //формат данных
                data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
                success: function(response) { //Данные отправлены успешно
                    result = $.parseJSON(response);
                    $('#result_form').html('Ваша заявка принята! В течении 30 мин. с Вами свяжутся!');
                    // 'Имя: '+result.name+'<br>Телефон: '+result.phonenumber
                },
                error: function(response) { // Данные не отправлены
                    $('#result_form').html('Ошибка. Данные не отправлены.');
                }
            });
        };
    
    //_____конец Ajax обаработки____
    
    //реализация слайдера
        $('.dop_product_slide').slick({
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        if($(window).width()<769){
            $('.all_dopSlider').slick({
                infinite: true,
            });

            $('.my_slider_boiler').slick({
                infinite: true,
            })
        };

        $('.slider_comments').slick({
            infinite: true,
            dots: false,
            arrows: true,
            
            
        });
        
        


    //---------

   //начало скрипта для Появление блоков с доп товаром

    $('.collapse_block_dop, .collapse_com, .collapse_boilers_block').slideUp();
    $('.more_dop a').on('click',function(){
    if(!$('.more_dop').hasClass('active')){
        $('.more_dop').addClass('active');
        $('.collapse_block_dop').slideDown();
        $('.more_dop a').html('Скрыть');
        setTimeout(function(){
            $('.dop_product_slide_collapse').slick({
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            });
        },400)
        
    }
    else{
        $('.more_dop').removeClass('active');
        $('.collapse_block_dop').slideUp();
        $('.more_dop a').html('Больше моделей')
    }
    })

    $('.button_show_more').on('click',function(){
        if(!$('.button_show_more').hasClass('active')){
            $('.button_show_more').addClass('active');
            $('.collapse_boilers_block').slideDown();
            $('.button_show_more').html('Скрыть');
        }
        else{
            $('.button_show_more').removeClass('active');
            $('.collapse_boilers_block').slideUp();
            $('.button_show_more').html('Показать больше')
        }
        })
    
    // и коментариев

    $('.colapse_button button a').on('click',function(){
        
        if(!$('.colapse_button button').hasClass('active')){
            $('.collapse_com').slideDown();
            $('.colapse_button button').addClass('active');
            $('.colapse_button button a').html('Скрыть')
        }
        else{
            $('.colapse_button button').removeClass('active');
            $('.collapse_com').slideUp();
            $('.colapse_button button a').html('Показать больше')
        }
        })

    // конец скрипта

    // начало крипта для кнопки бургер

    $('.burger_menu_button').click(function(){
        if ($('.burger_menu_button').hasClass('active')){
            $('.burger_menu_li').slideUp();
            $('.burger_menu_button').removeClass('active');
            setTimeout(function(){
                $('main').removeClass('main_active');
            },200)
        }else{
            $('.burger_menu_li').slideDown();
            $('.burger_menu_button').addClass('active');
            setTimeout(function(){
                $('main').addClass('main_active');
            },200)
            
        }
    });
    $('.burger_menu_li').click(function(){
        if ($('.burger_menu_button').hasClass('active')){
            $('.burger_menu_li').fadeOut();
            $('.burger_menu_button').removeClass('active');
            setTimeout(function(){
                $('main').removeClass('main_active');
            },200)
        }else{
            $('.burger_menu_li').fadeIn();
            $('.burger_menu_button').addClass('active');
        }
    })

    //конец скрипта

    //начало скрипта для якорей

    $(".nav .button_callCenter ").on("click", function () {
        // event.preventDefault();
        var header = parseFloat($(".navigation").height())-150;
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - header}, 1500);
    });

    $(".burger_menu .burger_menu_li .burger_menu_content .contacts_but_burg ").on("click", function () {
        // event.preventDefault();
        var header = parseFloat($(".navigation").height())-250;
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - header}, 1500);
    });

    $(".burger_menu .burger_menu_li .burger_menu_content .burg_but_one").on("click", function (event) {
        event.preventDefault();
        var header = parseFloat($(".navigation").height());
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - header}, 1500);
    });
    
    $(".nav ul li a, .button_boilers_catalog_header").on("click", function (event) {
        event.preventDefault();
        var header = parseFloat($(".navigation").height());
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - header}, 1500);
    });

    $(".boiler_choice_button,.button_dop_catalog_header ").on("click", function (event) {
        event.preventDefault();
        var header = parseFloat($(".navigation").height())-100;
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - header}, 1500);
    });

    //конец скрипта
  
   




});
