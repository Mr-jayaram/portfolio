$(document).ready(function() {

    // open side menu
    $(document).on('click', '.sidebar-open-icon', function() {
        $('.mobile-menu').fadeIn(500);
    })

    // hide side menu
    $(document).on('click', '.close-sidebar', function() {
        $('.mobile-menu').fadeOut(500);
    })

    new Splide('#splide', {
        type: 'loop',
        direction: 'ltr',
        height: 'auto',
        autoScroll: {
            speed: 1,
        },
        perPage: 3,
        gap: '10px',
        pagination: false,
        arrows: false,
        breakpoints: {
            768: {
                perPage: 1,
                gap: '5px',
            },
        },
    }).mount(window.splide.Extensions);

    $(document).on('click', '#header_menus li', function() {
        $('#header_menus li').removeClass('active');
        $(this).addClass('active');
    })

    // animation text
    const text = "Jayaram";
    const $typingElement = $("#myName");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            $typingElement.text($typingElement.text() + text.charAt(index));
            index++;
            setTimeout(typeText, 150);
        } else {
            setTimeout(() => {
                clearText();
            }, 1000);
        }
    }

    function clearText() {
        if (index > 0) {
            $typingElement.text(text.substring(0, index - 1));
            index--;
            setTimeout(clearText, 100);
        } else {
            setTimeout(typeText, 500);
        }
    }

    typeText();

        // block some functions
    
       document.onkeydown = function(e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'f12'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }

})
