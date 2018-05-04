
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
        
        $('.top-row').toggleClass('top-row_show-line');
        $('.top-row').toggleClass('top-row_hide-line');
        
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
             
             if ($('.top-row').hasClass('top-row_hide-line')) {
                 $('.top-row').toggleClass('top-row_show-line');
                    $('.top-row').toggleClass('top-row_hide-line');
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
    $('.top-row').toggleClass('top-row__opened');
    $('.menu-toggle').toggleClass('menu-toggle__opened');
}

$(function() {
  $('.lang-select').selectric();
  $('.lang-select').removeClass('lang-select_hidden');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICQoJy5vd2wtY2Fyb3VzZWwnKS5vbignaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsIGNoYW5nZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKCFlLm5hbWVzcGFjZSkgcmV0dXJuO1xyXG4gICAgbGV0IGNhcm91c2VsID0gZS5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgbGV0IGN1cnJlbnRfcGFnZSA9IGNhcm91c2VsLnJlbGF0aXZlKGNhcm91c2VsLmN1cnJlbnQoKSkgKyAxO1xyXG4gICAgbGV0IHBhZ2VfY291bnQgPSBjYXJvdXNlbC5pdGVtcygpLmxlbmd0aDtcclxuICAgIGlmICghJCgnLnNsaWRlcl9wYWdlcycpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJy5vd2wtcHJldicpLmFmdGVyKCc8ZGl2IGNsYXNzPVwic2xpZGVyX3BhZ2VzXCI+PHNwYW4gY2xhc3M9XCJzbGlkZXJfY3VycmVudC1wYWdlXCI+JytjdXJyZW50X3BhZ2UgKyAnPC9zcGFuPiBvZiA8c3BhbiBjbGFzcz1cInNsaWRlcl9wYWdlLWNvdW50XCI+JyArIHBhZ2VfY291bnQrJzwvc3Bhbj48L2Rpdj4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLnNsaWRlcl9jdXJyZW50LXBhZ2UnKS50ZXh0KGN1cnJlbnRfcGFnZSk7IFxyXG4gICAgfVxyXG4gIH0pLm93bENhcm91c2VsKHtcclxuICAgIGxvb3A6dHJ1ZSxcclxuICAgIG1hcmdpbjoxMCxcclxuICAgIG5hdjp0cnVlLFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIG5hdlRleHQ6IFsnJmxhcnI7JywnJnJhcnI7J11cclxuICAgIH0pICA7XHJcbiAgICBcclxuICAgICQoJy5vd2wtY2Fyb3VzZWwnKS50cmlnZ2VyKCdyZWZyZXNoLm93bC5jYXJvdXNlbCcpO1xyXG4gICAgbGV0IG5hdiA9ICQoJy5vd2wtbmF2Jyk7XHJcbiAgICAkKG5hdikuZGV0YWNoKCk7XHJcbiAgICAkKCcuc2xpZGVyX25hdicpLmFwcGVuZChuYXYpO1xyXG5cclxuICAgIFxyXG4gICAgJCgnLm1lbnUtdG9nZ2xlJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLnNlYXJjaC1jbGVhcicpLm9uKCdjbGljaycsZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJ2lucHV0W25hbWU9c2VhcmNoXScpLnZhbCgnJyk7XHJcbiAgICAgICAgICQoJ2lucHV0W25hbWU9c2VhcmNoXScpLmZvY3VzKCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLnNlYXJjaF90b2dnbGUnKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKCcuc2VhcmNoLWNvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLnRvcC1yb3cnKS50b2dnbGVDbGFzcygndG9wLXJvd19zaG93LWxpbmUnKTtcclxuICAgICAgICAkKCcudG9wLXJvdycpLnRvZ2dsZUNsYXNzKCd0b3Atcm93X2hpZGUtbGluZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICgkKCcuc2VhcmNoLWNvbnRhaW5lcicpLmhhc0NsYXNzKCd2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1zZWFyY2hdJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgaWYgKCAkKCcubWVudS10b2dnbGUnKS5oYXNDbGFzcygnbWVudS10b2dnbGVfX29wZW5lZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICAkKGRvY3VtZW50LmJvZHkpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50T2JqZWN0KSB7XHJcbiAgICAgICAgIGlmKCQoZXZlbnRPYmplY3QudGFyZ2V0KS5wYXJlbnRzKCcuc2VhcmNoLWNvbnRhaW5lcicpLmxlbmd0aCA9PSAwICYmICEkKGV2ZW50T2JqZWN0LnRhcmdldCkuaGFzQ2xhc3MoJ3NlYXJjaF90b2dnbGUnKSkge1xyXG4gICAgICAgICAgICAgJCgnLnNlYXJjaC1jb250YWluZXInKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBpZiAoJCgnLnRvcC1yb3cnKS5oYXNDbGFzcygndG9wLXJvd19oaWRlLWxpbmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICQoJy50b3Atcm93JykudG9nZ2xlQ2xhc3MoJ3RvcC1yb3dfc2hvdy1saW5lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRvcC1yb3cnKS50b2dnbGVDbGFzcygndG9wLXJvd19oaWRlLWxpbmUnKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgIH0pOyBcclxuICAgIFxyXG4gICAgJCgnLmxhbmctc2VsZWN0Jykub24oJ3NlbGVjdHJpYy1vcGVuJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJy5tZW51LXRvZ2dsZScpLmhhc0NsYXNzKCdtZW51LXRvZ2dsZV9fb3BlbmVkJykpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJCgnLnNlYXJjaC1jb250YWluZXInKS5oYXNDbGFzcygndmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICQoJy5zZWFyY2gtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICAkKCcubmF2aWdhdGlvbicpLnRvZ2dsZUNsYXNzKCduYXZpZ2F0aW9uX192aXNpYmxlJyk7XHJcbiAgICAkKCcudG9wLXJvdycpLnRvZ2dsZUNsYXNzKCd0b3Atcm93X19vcGVuZWQnKTtcclxuICAgICQoJy5tZW51LXRvZ2dsZScpLnRvZ2dsZUNsYXNzKCdtZW51LXRvZ2dsZV9fb3BlbmVkJyk7XHJcbn1cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgJCgnLmxhbmctc2VsZWN0Jykuc2VsZWN0cmljKCk7XHJcbiAgJCgnLmxhbmctc2VsZWN0JykucmVtb3ZlQ2xhc3MoJ2xhbmctc2VsZWN0X2hpZGRlbicpO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
