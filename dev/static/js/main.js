$(document).ready(function () {


    var rev = $('.index-video-slider');
    rev.on('init', function(event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        // console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        // console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1000,
        arrows: true,
        prevArrow: '.index-video-slider--prev',
        nextArrow: '.index-video-slider--next',
        //dots: true,
        //appendDots: '.index-video-slider-dots--wrap',
        focusOnSelect: true,
        infinite: true,
        // centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        variableWidth: true,
        rows: 0,
        useTransform: true,
        customPaging: function (slider, i) {
            return '<a class="index-video-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: "unslick",
            },

        ]
        /*infinite: false,*/
    });


    $('.index-video-slider-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.mobile-video-slider--prev',
        nextArrow: '.mobile-video-slider--next',
        //dots: true,
        //appendDots: '.mobile-video-dots--wrap',
        //variableWidth: true,
        rows: 0,
        // variableWidth: true,
        // centerMode: true,
        customPaging: function () {
            return '<a class="js-index-slider__dots"></a>';
        },
        responsive: [
            {
                breakpoint: 576,
                settings: {

                }
            },

        ]

    });


    $('.js-index-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.js-index-slider--prev',
        nextArrow: '.js-index-slider--next',
        //dots: true,
        //appendDots: '.js-index-slider-dots--wrap',
        //rows: 0,
        //variableWidth: true,
        //centerMode: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]

    });

    var sa = function() {

        if ($(window).width() < 1199) {
            $('.services-main--list').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                // prevArrow: '.js-index-slider--prev',
                // nextArrow: '.js-index-slider--next',
                arrows: false,
                dots: true,
                appendDots: '.services-main--list--slider-dots',
                infinite: false,
                customPaging: function () {
                    return '<a class="js-services-slider__dots"></a>';
                },
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    },

                ]

            });
        }
    };
    sa();


    var sa2 = function() {

        if ($(window).width() < 767) {
            $('.main-services--list').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                // prevArrow: '.js-index-slider--prev',
                // nextArrow: '.js-index-slider--next',
                arrows: false,
                dots: true,
                appendDots: '.main--list--slider-dots',
                infinite: false,
                customPaging: function () {
                    return '<a class="main-services-slider__dots"></a>';
                },
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    },


                ]

            });
        }
    };
    sa2();



    var ss1 = function() {
        var count_divs = $('.header-top--center__item');
        if ($(window).width() > 1199) {
            if (count_divs.length > 4){
                count_divs.slice(3).wrapAll('<div class="header-services">' +
                    '<div class="header-services--list__wrap">'+
                    '<ul class="header-services--list">' +

                    '</ul></div>' +
                    '<svg class="icon icon-services ">' +
                        '<use xlink:href="static/img/svg/symbol/sprite.svg#services"></use>'+
                    '</svg>' +
                    '<span>Услуги</span>' +
                +'</div>');
            }
        }
    };
    ss1();


    var ss2 = function() {
        var count_divs = $('.header-top--center__item');
        if ($(window).width() < 1199) {
            count_divs.slice(2).wrapAll('<div class="header-services">' +
                    '<div class="header-services--list__wrap">'+
                    '<ul class="header-services--list">' +

                    '</ul></div>' +
                    '<svg class="icon icon-services ">' +
                        '<use xlink:href="static/img/svg/symbol/sprite.svg#services"></use>'+
                    '</svg>' +
                    '<span>Услуги</span>' +
                +'</div>');
        }
    };
    ss2();




    $(function (){

        $('.header-services').hoverIntent({
            over: function () {
                $(this).addClass('active').siblings().removeClass('active')
                //$(this).children('.header-menu-hover').fadeIn(150);
                $(this).children('.header-services--list__wrap').fadeIn(150).css('display','flex');

                $('.header-services').mouseleave(function () {
                    $(this).children('.header-services--list__wrap').fadeOut(200);
                });

            },
            out: function () {


            }
        });
    });

    $(function (){

        $('.header-top--profile').hoverIntent({
            over: function () {
                $(this).addClass('active').siblings().removeClass('active')
                //$(this).children('.header-menu-hover').fadeIn(150);
                $(this).children('.header-top--profile--list__wrap').fadeIn(150).css('display','flex');

                $('.header-top--profile').mouseleave(function () {
                    $(this).children('.header-top--profile--list__wrap').fadeOut(200);
                });

            },
            out: function () {


            }
        });
    });

    $(function () {
        $('.header-bottom-menu--link').hoverIntent({
            over: function () {
                $(this).addClass('active').siblings().removeClass('active')
                //$(this).children('.header-menu-hover').fadeIn(150);
                $(this).children('.header-menu-hover').fadeIn(150).css('display','flex');

                $('.header-bottom-menu--link').mouseleave(function () {
                    $(this).children('.header-menu-hover').fadeOut(200);
                });

            },
            out: function () {


            }
        });


        $('.header-menu-child2-sub2').each(function (ndx) {
            $(this).attr('data-sub-link','header-menu--sub-'+(ndx+1));
        });

        $('.header-bottom-menu--child3').each(function (ndx) {
            $(this).addClass('header-menu--sub-'+(ndx+1));
        });

        $('.header-menu-child2-sub2').hoverIntent({
            over: function () {
                $(this).addClass('active').siblings().removeClass('active');
                var tabName = $(this).attr('data-sub-link');
                $('.header-bottom-menu--child3.' + tabName).addClass('active').siblings().removeClass('active');

            },
            out: function () {

            }
        });
    });

    $('.mobile-sandwich-menu--button').click(function(){
        $(this).addClass('active');
        $('.mobile-sandwich-menu').addClass('active');
        $('body').css('overflow','hidden');
    });
    $('.mobile-sandwich-close').click(function(){
        $('.mobile-sandwich-menu').removeClass('active');
        $('.mobile-sandwich-menu--button').removeClass('active');
        $('body').css('overflow','auto');
    });

    function headerScroll() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('active');

        } else {
            $('header').removeClass('active');

        }
    }

    headerScroll();

    $(window).scroll(function () {
        headerScroll();
    });



    $('.tabs-buttons').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
       var tabs = $(this).attr('data-tab');
       $('.tabs-content.' + tabs).addClass('active').siblings().removeClass('active');
    });

    $('.faq-question-item').click(function () {
       $(this).toggleClass('active')
       $(this).next().slideToggle(200);
    });
    $('.footer-bottom-lang-list').click(function () {
       $('.footer-bottom-lang-choise').fadeToggle(200);
    });
    $('.footer-bottom-choise__item').click(function () {
        var get_lang = $(this).attr('data-lang');
        var get_code = $(this).text();
        $(this).addClass('active-lang').siblings().removeClass('active-lang');
        $('.footer-bottom-lang--wrap').removeClass('lang-ru').removeClass('lang-en').removeClass('lang-ka').removeClass('lang-ta').removeClass('lang-ki').removeClass('lang-uz');
        $('.footer-bottom-lang--wrap').addClass(get_lang);
        $('.footer-bottom-lang__text').text(get_code);

    });

    $('.mask-code').mask('00 00 00 00');
    $('.mask-phone').mask('+7(000) 000-00-00');
    $('.mask-date').mask('00.00.0000');


    $('.date-exam').each(function(){
        $(this).datepicker({
            //autoShow: true,
            autoPick: true,
            language: 'ru-RU',
            autoHide: true,
            //trigger: '.data-exam-popup',
            inline: true,
            container: '.ur-show-calendar',
            pickedClass: 'picked-day-ur',
            highlightedClass: 'today-day-ur',
            zIndex: 1050,
            startDate: function(date){
                date.valueOf() < now ? true : false;
            },
            template: '<div class="datepicker-container" id="datepicker-id-trip">' + '<div class="datepicker-panel" data-view="years picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="years prev">&lsaquo;</li>' + '<li data-view="years current"></li>' + '<li data-view="years next">&rsaquo;</li>' + '</ul>' + '<ul data-view="years"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="months picker">' + '<ul>' + '<li data-view="year prev">&lsaquo;</li>' + '<li data-view="year current"></li>' + '<li data-view="year next">&rsaquo;</li>' + '</ul>' + '<ul data-view="months"></ul>' + '</div>' + '<div class="datepicker-panel" data-view="days picker">' + '<ul class="gogocar-ul-navbar">' + '<li data-view="month prev" class="gogocar-calendar-prev"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
                '  <path d="M9,17,1,9,9,1" style="fill: none;stroke: #BEBEBE;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
                '</svg></li>' + '<li data-view="month current" class="gogocar-calendar-current"></li>' + '<li data-view="month next" class="gogocar-calendar-next"><svg xmlns="http://www.w3.org/2000/svg" class="icon" id="Слой_1" data-name="Слой 1" viewBox="0 0 10 18">\n' +
                '  <path d="M1,1,9,9,1,17" style="fill: none;stroke: #BEBEBE;stroke-linecap: round;stroke-linejoin: round;stroke-width: 2px"/>\n' +
                '</svg></li>' + '</ul>' + '<ul data-view="week"></ul>' + '<ul data-view="days"></ul>' + '</div>' + '</div>',
        });

    });

    $('.popup-pay-check').on('click',function () {
        $('.popup-pay-check').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $pay = $(this);
        $('.popup-pay-checked-input').removeAttr('data-pay','checked');
        $pay.prev('.popup-pay-checked-input').attr('data-pay','checked');
    });

    // Consult-chat

    $('.support-button').click(function () {
        $('.support-consult').fadeIn(200);
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".support-consult,.support-button").length) {
            $('.support-consult').fadeOut(200);
        }
        e.stopPropagation();
    });

    $('.support-consult-close').click(function () {
        $('.support-consult').fadeOut(200);
    });
    $('.support-consult-smile').click(function () {
        $('.support-consult-smiles').fadeToggle(200);
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".support-consult-smiles,.support-consult-smile").length) {
            $('.support-consult-smiles').fadeOut(200);
        }
        e.stopPropagation();
    });




    $('.support-consult-textarea').click(function () {
        $('.support-consult-placeholder').fadeOut(200);
    });
    if (!$('.support-consult-textarea').is(':empty')){
        $('.support-consult-placeholder').fadeOut(200);
    }

    $(document).click(function (e) {

        if (!$(e.target).closest(".support-consult-textarea").length) {
            $('.support-consult-placeholder').fadeIn(200);
        }
        if ($('.support-consult-textarea').html()) {
            $('.support-consult-placeholder').hide();
        }
        e.stopPropagation();
    });


    $('.side-toggle-exam--wrap').click(function () {
       $(this).toggleClass('active');
       $(this).next().slideToggle(200).css('display','flex');
    });
    $('.price-body-top__arrow').click(function () {
       $(this).toggleClass('active');
       $(this).parents('.price-list-body__top').next().slideToggle(200);
    });


    // ========================== Chat ======================================//

    var x = document.getElementsByClassName("chat-container-message--name--button")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", showChangeMsg);
    function showChangeMsg(){ // Изменить или удалить сообщение
        $('.chat-container-option--message').fadeOut(200);
        $('.chat-container-message--name--button').removeClass('active');
        $(this).toggleClass('active');
        $(this).next().fadeToggle(200).toggleClass('active');
        // if($(this).hasClass('active') && $(window).width() < 576){
        //     $('body').css('overflow','hidden');
        // } else {
        //     $('body').css('overflow-y','scroll');
        // }
        if($(this).hasClass('active')){
            $('.header-panel--fixed').addClass('anim-bottom');
        }
    }
    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container-option--message,.chat-container-message--name--button").length) {
            $('.chat-container-option--message').fadeOut(200);
            $('.chat-container-message--name--button').removeClass('active');
            //$('body').css('overflow-y','scroll');
        }
        e.stopPropagation();
    });
    $('.chat-container-option--message--item--cancel,.chat-change-message,.chat-answer-message').click(function () {
        $('.chat-container-option--message,.chat-delete-out-msg').fadeOut(200);
        $('.chat-container-message--name--button').removeClass('active');
        //$('body').css('overflow-y','scroll');
        $('.header-panel--fixed').removeClass('anim-bottom');

    });
    var x = document.getElementsByClassName("chat-change-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", changeMsg);
    function changeMsg(){ // Удаление сообщений отправителя
        $('#chat-edit-msg').fadeIn(150).css('display','flex');
        var get_text_edit = $(this).parents('.chat-container-message--date__name').next().text();
        $('#chat-edit-text').text(get_text_edit);
        $('.chat-show-message-out--mobile').fadeOut(150);
        $('.header-panel--fixed').removeClass('anim-bottom');
    }
    var x = document.getElementsByClassName("chat-delete-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", deleteMsg);
    function deleteMsg(){ // Удаление сообщений отправителя
        $(this).parents('.chat-container-message-out').remove();
        $('.header-panel--fixed').removeClass('anim-bottom');
    }
    var x = document.getElementsByClassName("chat-answer-message")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", shareMsg);
    function shareMsg(){ // Удаление сообщений отправителя
        $('#chat-edit-msg').fadeIn(150).css('display','flex').addClass('chat-edit-now');

        var get_text_share = $(this).parents('.chat-container-message--date__name').next().text();
        var get_name_share = $(this).parents('.chat-container-option--message').next().text();
        $('#chat-edit-text').text(get_text_share);
        $('.chat-container--edit--title').text(get_name_share);

    }
    var x = document.getElementsByClassName("cab-chat-emoji")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", handleClickEmoji);

    function handleClickEmoji() {

        var x = document.getElementById("chat-get-text");
        if (x) {
            var img = document.createElement("img");
            img = this.cloneNode(true);
            img.className = 'gogocar-emoji--in-input';
            x.appendChild(img);
        }

    }
    $('.chat-container-footer--input__text').click(function () {
        $('.chat-container-footer--placeholder').fadeOut(150);
    });
    if (!$('.chat-container-footer--input__text').is(':empty')){
        $('.chat-container-footer--placeholder').fadeOut(200);
    }


    $(document).click(function (e) {

        if (!$(e.target).closest(".chat-container-footer--input__text,.chat-container-footer--file__input,.chat-container-footer--smiles,.gogocar-emoji,.chat-container-footer--emoji").length) {
            $('.chat-container-footer--placeholder').fadeIn(200);
        }
        if ($('.chat-container-footer--input__text').html()) {
            $('.chat-container-footer--placeholder').hide();
        }
        e.stopPropagation();
    });
    // создём массив ВНЕ функции, чтобы он каждый раз не затирался
    var array_files = [];


    $(function () {


        $('.personal-upload-files--input,.chat-container-footer--input__file').on('change', function (e) {
            $('.chat-container--edit--message--file--add').addClass('active');
            $('.support-consult-file-wrap').fadeIn(200).css('display','flex');
            // пушим файлы в массив
            for (var i = 0; i < e.target.files.length; i++) {
                array_files.push(e.target.files[i]);
            }

            var data = new FormData(); var count = 0;
            $.each(array_files, function(i, file){
                data.append(count, file);
                count++;
            });

            // удаляем все старые иконки файлов на JS
            var x = document.getElementsByClassName("personal-appear--file--wrap");
            for (var i = 0; i < x.length; i++) {
                // удаляем с конца!!!
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                    if (x[i].childNodes[y].className == "personal-loaded--file")
                        x[i].removeChild(x[i].childNodes[y]);

                }
            }

            // здесь ты получал расширение только певого файла
            // поэтому иконки для всех файлов были одинаковые


            Array.from(array_files).forEach(file => {



                var file_name = file.name;
                var substr = file_name.split('.').shift().substring(0,15);

                // теперь расширение файла получается здесь
                // поэтому иконки файлов правильные
                var ext = file_name.split('.').pop();
                var file_format = ext;


                if(file_format == 'pdf'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-pdf"><use xlink:href="./static/img/svg/symbol/sprite.svg#pdf"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'png'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-png"><use xlink:href="./static/img/svg/symbol/sprite.svg#png"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'jpg' || 'jpeg'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-jpg"><use xlink:href="./static/img/svg/symbol/sprite.svg#jpg"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'docx'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-doc"><use xlink:href="./static/img/svg/symbol/sprite.svg#doc"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'zip'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-zip"><use xlink:href="./static/img/svg/symbol/sprite.svg#zip"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                } else if(file_format == 'txt'){
                    $('.personal-appear--file--wrap').append('<div class="personal-loaded--file"><div class="gogocar-gray-icons personal-icon-loaded--appeal"><svg class="icon icon-txt"><use xlink:href="./static/img/svg/symbol/sprite.svg#txt"></use></svg></div><span class="personal-loaded--file__name">' + substr + '</span></div>')
                }
            });

        });

    });

    $('.personal-loaded--file__icon').click(function () {
        $('.personal-loaded--file').remove();
        array_files = [];
        // $(".chat-container-footer")[0].reset();
        $('.chat-container--edit--message--file--add').removeClass('active');
    });


    $(document).click(function (e) {
        if (!$(e.target).closest(".support-consult-file-wrap,.support-consult-addfile").length) {
            $('.support-consult-file-wrap').fadeOut(200);
        }
        e.stopPropagation();
    });

    $('.chat-answer-message').on('click',function () {
        $('#chat-edit-msg').fadeIn(150).css('display','flex');
    });
    $('#chat-edit-close').click(function () {
        $('#chat-edit-msg').fadeOut(150).removeClass('chat-edit-now');

    });
    $('.chat-container-footer--smiles').on('click',function () {
        $('.chat-container-footer--emoji--list').fadeToggle(200).css('display','flex');
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container-footer--smiles,.chat-container-footer--emoji--list").length) {
            $('.chat-container-footer--emoji--list').fadeOut(200);
        }
        e.stopPropagation();
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".chat-container--edit--message--file--add").length) {
            $('.chat-container--edit--message--file--add').removeClass('active');
        }
        e.stopPropagation();
    });
    $(function () {


        $('.chat-answer-message').on('click',function () {
            $('#chat-edit-msg').fadeIn(150).css('display','flex');
        });
        $('#chat-edit-close').click(function () {
            $('#chat-edit-msg').fadeOut(150).removeClass('chat-edit-now');

        });



        var x = document.getElementsByClassName("chat-change-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", changeMsg);
        function changeMsg(){ // Удаление сообщений отправителя
            $('#chat-edit-msg').fadeIn(150).css('display','flex');
            var get_text_edit = $(this).parents('.chat-container-message--date__name').next().text();
            $('#chat-edit-text').text(get_text_edit);
            $('.chat-show-message-out--mobile').fadeOut(150);
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        var x = document.getElementsByClassName("chat-answer-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", shareMsg);
        function shareMsg(){ // Удаление сообщений отправителя
            $('#chat-edit-msg').fadeIn(150).css('display','flex').addClass('chat-edit-now');

            var get_text_share = $(this).parents('.chat-container-message--date__name').next().text();
            var get_name_share = $(this).parents('.chat-container-option--message').next().text();
            $('#chat-edit-text').text(get_text_share);
            $('.chat-container--edit--title').text(get_name_share);

        }



        var x = document.getElementsByClassName("chat-delete-message")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", deleteMsg);
        function deleteMsg(){ // Удаление сообщений отправителя
            $(this).parents('.chat-container-message-out').remove();
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        $('.chat-container-option-dot').click(function () {
            $('.chat-container-header--delete__message').fadeOut(200);
            $(this).next().next('.chat-container-header--delete__message').fadeIn(200).css('display','flex');
            $('.chat-container-option-dot').removeClass('chat-close-delete__window');
            $(this).toggleClass('chat-close-delete__window');
        });

        $(document).click(function (e) {
            if (!$(e.target).closest(".chat-container-option-dot,.chat-container-header--delete__message").length) {
                $('.chat-container-header--delete__message').fadeOut(200);
                $('.chat-container-option-dot').removeClass('chat-close-delete__window');

            }
            e.stopPropagation();
        });


        $('.chat-container-header--option-delete--back').click(cdmb);
        function cdmb(){
            $('.chat-container-header--option-delete__panel').css('display','none');
            $('.chat-container-option-dot').css('display','flex');
            $('.chat-container-message--wrap--delete__check--wrap').css('display','none');
            $('.gogocar-go-back-chat--mobile').removeClass('active');
            $('.chat-delete-out-msg').removeClass('active');
            $('.header-panel--fixed').removeClass('anim-bottom');
        }

        $('.chat-container-header--option-delete--delete').click(showDelMsg);
        function showDelMsg(){ // Изменить или удалить сообщение
            $('.chat-delete-out-msg').addClass('active');

            if($(window).width() < 576){
                $('body').css('overflow','hidden');
                $('.chat-delete-out-msg').fadeIn(200);
            }
            // else {
            //     $('body').css('overflow-y','scroll');
            // }
            if($('.chat-delete-out-msg').hasClass('active')){
                $('.header-panel--fixed').addClass('anim-bottom');
            }
        }

        var x = document.getElementsByClassName("chat-container-message--wrap--delete__check")
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", deleteAllMsg);
        function deleteAllMsg(){ // Удаление сообщений отправителя
            $(this).toggleClass('checked');
            if($(this).hasClass('checked')){
                $(this).html('<svg class="icon icon-ok-del "><use xlink:href="static/img/svg/symbol/sprite.svg#ok-del"></use></svg>')
                $(this).parents('.chat-container-message-out').addClass('checked-delete-msg');
            } else {
                $(this).html('');
                $(this).parents('.chat-container-message-out').removeClass('checked-delete-msg');
            }

        }

        $('.delete-choise-chat-msg,.chat-choise-delet-msg').click(function () {
            $('.checked-delete-msg').remove();
        });
        $('.chat-choise-delet-msg').click(function () {
            $('.chat-delete-out-msg').fadeOut(150);
            $('.header-panel--fixed').removeClass('anim-bottom');
        });

        // Добавить сообщение
        var today = new Date();
        var getDate = today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();



        $('.chat-container-footer--submit').click(printMsg);
        function printMsg() {
            var contents = $('#chat-get-text').html();

            var c_name = $('.chat-container--edit--title').text();
            var c_text = $('.chat-container--edit--text').text();
            var content_share = '<div class="chat-message--share--info"><div class="chat-message--share--info__name">'+ c_name +'</div><div class="chat-message--share--info__text">'+ c_text +'</div></div>'

            $('.chat-container-main--info').append(

                '<div class="chat-container-people-messages chat-container-message-out">\n' +
                '                        <div class="chat-container-message--wrapper">\n' +
                '                          <div class="chat-container--message--status">\n' +
                '                            <svg class="icon icon-not-looked ">\n' +
                '                              <use xlink:href="./static/img/svg/symbol/sprite.svg#not-looked"></use>\n' +
                '                            </svg>\n' +
                '                          </div>\n' +
                '                          <div class="chat-container-message--wrap">\n' +
                '                            <div class="chat-container-message--info__message">\n' +
                '                              <div class="chat-container-message--date__name"><span>'+ time +'</span>\n' +
                '                                <div class="chat-container-message--name--wrap">\n' +
                '                                  <div class="chat-container-message--name--button">\n' +
                '                                    <svg class="icon icon-arrow-right ">\n' +
                '                                      <use xlink:href="static/img/svg/symbol/sprite.svg#arrow-right"></use>\n' +
                '                                    </svg>\n' +
                '                                  </div>\n' +
                '                                  <div class="chat-container-option--message chat-show-message-out chat-show-message-out--mobile">\n' +
                '                                    <div class="chat-container-option--message--wrap">\n' +
                '                                      <div class="chat-container-option--message--wrap--buttons">\n' +
                '                                        <div class="chat-container-option--message--item chat-change-message">\n' +
                '                                          <svg class="icon icon-pen ">\n' +
                '                                            <use xlink:href="static/img/svg/symbol/sprite.svg#pen"></use>\n' +
                '                                          </svg><span>Изменить</span>\n' +
                '                                        </div>\n' +
                '                                        <div class="chat-container-option--message--item chat-delete-message">\n' +
                '                                          <svg class="icon icon-delete-red ">\n' +
                '                                            <use xlink:href="static/img/svg/symbol/sprite.svg#delete-red"></use>\n' +
                '                                          </svg><span>Удалить</span>\n' +
                '                                        </div>\n' +
                '                                      </div>\n' +
                '                                      <div class="chat-container-option--message--item--cancel">Отмена</div>\n' +
                '                                    </div>\n' +
                '                                  </div>\n' +
                '                                  <div class="chat-container-message--name">Татьяна Гусева</div>\n' +
                '                                </div>\n' +
                '                              </div>\n' +
                '                              <p class="chat-container--message">'+ contents  +'</p>\n' +
                '                            </div>\n' +
                `                          <div class='chat-container-message--img' style='background-image:url("./static/img/general/ava2.png");'></div>\n` +
                '                          </div>\n' +
                '                          <div class="chat-container-message--wrap--delete__check--wrap">\n' +
                '                            <div class="chat-container-message--wrap--delete__check"></div>\n' +
                '                          </div>\n' +
                '                        </div>\n' +
                '                      </div>'
            )
            var x = document.getElementsByClassName("chat-container-message--name--button")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", showChangeMsg);
            var x = document.getElementsByClassName("chat-delete-message")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", deleteMsg);
            var x = document.getElementsByClassName("chat-container-message--wrap--delete__check")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", deleteAllMsg);
            var x = document.getElementsByClassName("chat-change-message")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", changeMsg);
            var x = document.getElementsByClassName("chat-container-option--message--item--cancel")
            if (x.length > 0)
                for (let item of x)
                    item.addEventListener("click", closeActionChat);



        }

    });
    // **********************************************************************//
    $('.box-shadow-none .chat-close-chat').click(function () {
       $(this).toggleClass('arrow-rot');
       $('.chat-body-footer--wrap').slideToggle(200);
    });

    $('.contacts-tel-reg--wrap').click(function(){
        $('.contacts-tel-reg-list ').slideToggle(200);
    });

    $('.contacts-tel-reg-item').on('click',function () {
        var get_code = $(this).attr('data-mask-phone');
        var get_flag = $(this).children('.contacts-tel-reg-item--flag').attr('style');

        $('.contacts-tel-reg--flag').attr('style',get_flag);
        $(this).parents('.contacts-tel-reg--wrap').next('.mask-phone').mask(get_code);

    });

    $('.blog-articles-sort-attr').click(function(){
        $(this).toggleClass('active');
        $('.blog-articles-sort-attr--select__list').fadeToggle(200);
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".blog-articles-sort-attr,.blog-articles-sort-attr--select__list").length) {
            $('.blog-articles-sort-attr--select__list').fadeOut(200);
            $('.blog-articles-sort-attr').removeClass('active');
        }
        e.stopPropagation();
    });

    $('.blog-articles-sort-attr--select__item').click(function(){
        var get_sort = $(this).text();
        $('.blog-articles-sort-attr--select span').text(get_sort);
    });

    $('.comment-item--toggle').click(function(){
        $(this).toggleClass('active');
        $(this).next('.comment-items--toggle-show').slideToggle(200);
    });

    $('.footer-middle--list--category').click(function(){
        $('.footer-middle--list--category__list').slideToggle(200);
    });

    $('.footer-middle--list--category__item').click(function(){
        var gt = $(this).text();
        $('.footer-middle--list--category span').text(gt);
    });

    $('.popup-calendar--date__exam--checkbox').on('click',function () {
        $('.popup-calendar--date__exam--checkbox').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $type_effect = $(this);
        $('.popup-calendar--date__exam--checkbox__input').removeAttr('data-time-check','checked');
        $type_effect.parent().find('.popup-calendar--date__exam--checkbox__input').attr('data-time-check','checked');
    });


    $('.input-ur-date input').click(function(){
        $('.ur-show-calendar').fadeIn(200).css('display','flex');
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".ur-show-calendar,.input-ur-date").length) {
            $('.ur-show-calendar').fadeOut(200);

        }
        e.stopPropagation();
    });

    $('.test-page--button').on('click',function () {
        $('.test-page--button').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
    });

    $('.footer-middle--list__item-show-ul').click(function(){
        $(this).prev().slideToggle(200).css('display','flex');
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).text('Скрыть');
        } else {
            $(this).text('Подробнее');
        }
    });

    // Chat-consult
    $('.support-consult-textarea').click(function(){
        $('.support-consult--annotation').hide();
        $('.support-consult--messages').show();
    });
    // Добавить сообщение
    var today = new Date();
    var getDate = today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    $('.support-consult-send').click(sendC);
    function sendC(){
        var contents = $('#support-consult-msg').html();
        $('.support-consult--messages').append(
            '<div class="support-consult-people-messages support-consult-message-out">\n' +
                '<div class="support-consult-message--wrappper">\n' +
                    '<div class="support-consult-message--block">\n' +
                        '<div class="support-consult-message--block__top">\n' +
                            '<div class="support-consult-message--block__name">Михаил Кокорин</div>\n' +
                            '<div class="support-consult-message--block__time">'+ time +'</div>\n' +
                        '</div>\n' +
                        '<div class="support-consult-message--block__text">'+ contents +'</div>\n' +
                    '</div>\n' +
                '</div>\n' +
            '</div>'
        )
    }
    var x = document.getElementsByClassName("support-consult-smiles__item")
    if (x.length > 0)
        for (let item of x)
            item.addEventListener("click", handleClickEmoji);

    function handleClickEmoji() {

        var x = document.getElementById("support-consult-msg");
        if (x) {
            var img = document.createElement("img");
            img = this.cloneNode(true);
            img.className = 'ur-emoji--in-input';
            x.appendChild(img);
        }

    }


    var array_files2 = [];


    $(function () {

        var itemG;
        $('.popup-load-you-input').on('change', function (e) {
            e.preventDefault;
            //$('.chat-container--edit--message--file--add').addClass('active');

            // пушим файлы в массив
            for (var i = 0; i < e.target.files.length; i++) {
                array_files2.push(e.target.files[i]);

                itemG = i;

            }

            var data = new FormData(); var count = 0;
            $.each(array_files2, function(i, file,ndx){
                data.append(count, file);

                count++;



            });

            // удаляем все старые иконки файлов на JS
            var x = document.getElementsByClassName("popup-load--file--wrap");
            for (var i = 0; i < x.length; i++) {

                // удаляем с конца!!!
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                    if (x[i].childNodes[y].className == "popup-load-loaded--file")
                        x[i].removeChild(x[i].childNodes[y]);



                }


            }


            // здесь ты получал расширение только певого файла
            // поэтому иконки для всех файлов были одинаковые


            Array.from(array_files2).forEach(file => {



                var file_name = file.name;
                var substr = file_name.split('.').shift().substring(0,15);

                // теперь расширение файла получается здесь
                // поэтому иконки файлов правильные
                var ext = file_name.split('.').pop();
                var file_format = ext;

                $('.popup-load-loaded--file').each(function(ndx){
                    $(this).attr('id',ndx);

                })
                if(file_format == 'pdf'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-pdf"><use xlink:href="./static/img/svg/symbol/sprite.svg#pdf"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-delete-file"><use xlink:href="./static/img/svg/symbol/sprite.svg#delete-file"></use></svg></div></div>')
                } else if(file_format == 'png'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-png"><use xlink:href="./static/img/svg/symbol/sprite.svg#png"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-delete-file"><use xlink:href="./static/img/svg/symbol/sprite.svg#delete-file"></use></svg></div></div>')
                } else if(file_format == 'jpg' || 'jpeg'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-jpg"><use xlink:href="./static/img/svg/symbol/sprite.svg#jpg"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-delete-file"><use xlink:href="./static/img/svg/symbol/sprite.svg#delete-file"></use></svg></div></div>')
                } else if(file_format == 'docx'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-doc"><use xlink:href="./static/img/svg/symbol/sprite.svg#doc"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-delete-file"><use xlink:href="./static/img/svg/symbol/sprite.svg#delete-file"></use></svg></div></div>')
                } else if(file_format == 'zip'){
                    $('.popup-load--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-zip"><use xlink:href="./static/img/svg/symbol/sprite.svg#zip"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-delete-file"><use xlink:href="./static/img/svg/symbol/sprite.svg#delete-file"></use></svg></div></div>')
                } else if(file_format == 'txt'){
                    $('.popup-loadr--file--wrap').append('<div class="popup-load-loaded--file"><div class="popup-load-icon-loaded--appeal__wrap"><div class="popup-load-icon-loaded--appeal"><svg class="icon icon-txt"><use xlink:href="./static/img/svg/symbol/sprite.svg#txt"></use></svg></div><span class="popup-load-loaded--file__name">' + substr + '</span></div><div class="popup-delete-this--file"><svg class="icon icon-delete-file"><use xlink:href="./static/img/svg/symbol/sprite.svg#delete-file"></use></svg></div></div>')
                }

            });

        });

        $('.popup-load--file--wrap').on('click','.popup-load-loaded--file',function() {
            var this_id = $(this).attr('id');
            array_files2[this_id] = [];
            $(this).remove();
        });

    });
    $('[data-toggle="modal"]').click(function(){
        if($('.modal').hasClass('show')){
            $('body').addClass('modal-show');
            console.log('dsad');

        }
    });
    $('.popup-close--icon').click(function(){
        $('body').removeClass('modal-show');
    });
    $(document).click(function (e) {
        if (!$(e.target).closest(".modal-content").length) {
            $('body').removeClass('modal-show');
        }
        e.stopPropagation();
    });
    // $("#popup-load-you-input").change(function () {

    //     if (this.files && this.files[0]) {
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             $('.popup-load-you-file--zone').attr('style', 'background-image:url("'+ e.target.result +'");');

    //         };
    //         reader.readAsDataURL(this.files[0]);
    //     }

    // });
    var x = document.getElementById("popup-load-you-input");
    if (x) x.addEventListener("change", function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.popup-load-you-file--zone').attr('style', 'background-image:url("'+ e.target.result +'");');

            };
            reader.readAsDataURL(this.files[0]);
        }
        var elem = document.getElementById("mod-vid-progress");
        var num = document.getElementById("mod-vid-progress-number");
        var count = 0;
        let id = setInterval(frame, 20);

        function frame() {
            if (count >= 100) {
                $('.popup-load-you-file--video').attr('data-fancybox','iframe').attr('href','https://youtu.be/svPxOMQXads').css('z-index','20');
                $('.popup-load-you-file--zone').addClass('opacity-show');
                $('.popup-file--video--button').removeAttr('disabled').addClass('not-disabled');
                $('.popup-progress-load').fadeOut(0);
                $('.pp-reviews__icon').fadeIn(100).css('display','flex');
                clearInterval(id);
            } else {
                $('.popup-progress-load').fadeIn(50).css('display','flex');
                count++;
                elem.value = count;
                num.innerHTML = count + '%';
            }
        }
    })


    // $('.tabs-buttons-blog').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    //     var tabs = $(this).attr('data-tab');
    //     $('.tabs-content.' + tabs).addClass('active').siblings().removeClass('active');
    //  });


});