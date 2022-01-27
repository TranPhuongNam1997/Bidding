

$( document ).ready(function() {

    //nut scroll top
    $("#back-to-top").click(function () {
        $("html, body").animate({scrollTop : 0},"slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('#back-to-top').show();
        }
        else {
            $('#back-to-top').hide();
        }
    });

    //js mutiple
    $('.sl-multiple').multipleSelect({
        width: '100%',
        single: false,
        filter: true,
        placeholder: "Chọn giá trị",
    }).multipleSelect('refresh');

    //js accordion danh sach
    $('.category-investor').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    })
    $('.title-process').click(function(){
        $(this).next('.body-process').slideToggle();
        $(this).toggleClass('active');
    })



    //js tim kiem nang cao
    $('.animated-checkbox a').on('click',function(){
        $(this).toggleClass('checked');
        $(this).parent().parent().find('.item-cate').toggleClass('selected');
        $(".box-search.box-search-active").css('display','flex');
        let hClass = $(this).hasClass('checked');
        if(hClass){
            $(".box-search.box-search-active").slideDown();
        }
        else{
            $(".box-search.box-search-active").slideUp();
        }
    });

    //js accordion bao cao
    $('.head-report').click(function(){
        $('.child-list').slideUp();
        $('.head-report').removeClass('active');

        if (!$(this).next('.child-list').is(':visible')){
            $(this).next('.child-list').slideDown();
            $(this).addClass('active');
        }
    })

});

//js tinh vi tri của tooltip

function inittitlefuction() {
    $('.btn-function').off('mouseover').on('mouseover', function () {
        var _windowScroll = $(window).scrollTop();
        var _windowLeft = $(window).scrollLeft();
        // tinh vị trí của của item-list
        var _offset = $(this).offset();
        $('.name-function-fix', $(this)).css({ "top": (_offset.top - _windowScroll) + "px", "left": (_offset.left - _windowLeft) + "px" })
    }).off('mouseout').on('mouseout', function () {
        $('.name-function-fix', $(this)).css({ "top": "-1000px", "left": "-1000px" })
    });
    if (innerWidth < 992) {
        $('.btn-function').off('focusin').on('focusin', function () {
            var _windowScroll = $(window).scrollTop();
            var _windowLeft = $(window).scrollLeft();
            // tinh vị trí của của item-list
            var _offset = $(this).offset();
            $('.name-function-fix', $(this)).css({ "top": (_offset.top - _windowScroll) + "px", "left": (_offset.left - _windowLeft) + "px" })
        }).off('focusout').on('focusout', function () {
            $('.name-function-fix', $(this)).css({ "top": "-1000px", "left": "-1000px" })
        });
    }
}

$(document).ready(function (event) {

    // $('.showhide-pass div').click(function () {
    //     var x = document.getElementById("password-login");
    //     $('.showhide-pass div').toggleClass('active');
    //     if (x.type === "password") {
    //         x.type = "text";
    //     } else {
    //         x.type = "password";
    //     }
    // });
    // // begin click outside
    //
    // $(".btn-category").click(function (event) {
    //    $('.navigation').slideToggle(300,'swing');
    //    $(this).toggleClass('active');
    //     event.stopPropagation();
    // });
    // const $menu = $('.header-home');
    // $(document).mouseup(e => {
    //     if (!$menu.is(e.target)
    //         && $menu.has(e.target).length === 0)
    //     {
    //         $('.btn-category').removeClass('active');
    //         $('.navigation').slideUp(300,'swing');
    //     }
    // });
    // // end click outside
    //
    // function readURL(input) {
    //     if (input.files && input.files[0]) {
    //         var reader = new FileReader();
    //         reader.onload = function(e) {
    //             $('#imagePreview').css('background-image', 'url('+e.target.result +')').hide().fadeIn(650);
    //         };
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    // $("#imageUpload").change(function() {
    //     readURL(this);
    // });
    // $('#text-cmt').keyup(function (e) {
    //
    //    if(e.target.value && e.target.value.length > 0){
    //         $('.fly-cmt svg path').attr('fill','#4782FD');
    //    }
    //    else {
    //        $('.fly-cmt svg path').attr('fill','#616770');
    //        // alert('a')
    //
    //    }
    //
    // });



});