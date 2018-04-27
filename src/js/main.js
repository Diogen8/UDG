
$(document).ready(function(){
  $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace) return;
    let carousel = e.relatedTarget;
    let current_page = carousel.relative(carousel.current()) + 1;
    let page_count = carousel.items().length;
    if (!$('.slider_pages').length) {
        $('.owl-prev').after('<div class="slider_pages"><span class="slider_current-page">'+current_page + '</span> of <span class="slider_page-count">' + page_count+'</span></div>');
    } else {
        $('.slider_current-page').text(current_page); 
    }
  }).owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    dots: false,
    navText: ['&larr;','&rarr;']
    })  ;
    
    $('.owl-carousel').trigger('refresh.owl.carousel');
    let nav = $('.owl-nav');
    $(nav).detach();
    $('.slider_nav').append(nav);

    
    $('.menu-toggle').on('click',function(e){
        toggleMenu();
    });
    
    $('.search-clear').on('click',function(e) {
        $('input[name=search]').val('');
         $('input[name=search]').focus();
    });
    
    $('.search_toggle').on('click',function(e) {
        $('.search-container').toggleClass('visible');
        
        $('.header_top-row').toggleClass('header_top-row__show-line');
        $('.header_top-row').toggleClass('header_top-row__hide-line');
        
        if ($('.search-container').hasClass('visible')) {
            $('input[name=search]').focus();
            if ( $('.menu-toggle').hasClass('menu-toggle__opened')) {
                toggleMenu();
            }
        }
    });
     $(document.body).click(function(eventObject) {
         if($(eventObject.target).parents('.search-container').length == 0 && !$(eventObject.target).hasClass('search_toggle')) {
             $('.search-container').removeClass('visible');
             
             if ($('.header_top-row').hasClass('header_top-row__hide-line')) {
                 $('.header_top-row').toggleClass('header_top-row__show-line');
                    $('.header_top-row').toggleClass('header_top-row__hide-line');
             }
         }
     }); 
    
    $('.lang-select').on('selectric-open', function() {
        if ($('.menu-toggle').hasClass('menu-toggle__opened')) {
            toggleMenu();
        }
        if ($('.search-container').hasClass('visible')) {
            $('.search-container').removeClass('visible');
        }
    });
    
});

function toggleMenu() {
    $('.navigation').toggleClass('navigation__visible');
    $('.header_top-row').toggleClass('header_top-row__opened');
    $('.menu-toggle').toggleClass('menu-toggle__opened');
}

$(function() {
  $('.lang-select').selectric();
  $('.lang-select').removeClass('hidden');
});

