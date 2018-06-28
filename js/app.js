$(document).ready(function () {
    /* Variables for Scroll animations */
    var scrollProductos = true,
        scrollCalibracion = true,
        scrollMantenimiento = true,
        scrollPersonal = true,
        scrollUbicacion = true;

    checkWindowSize();

    /* Animation for Menu */
    $('.navbar-link').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    /* Parallax effect */
    $(window).on("scroll", function () {
        var productos = document.getElementById('prod-parallax');
        var empresa = document.getElementById('empresa');
        var contacto = document.getElementById('contacto-parallax');

        parallaxScrollElement(productos);
        parallaxScrollElement(empresa);
        parallaxScrollElement(contacto);
    })

    /* Scroll Animations */
    $(window).on("resize scroll", function () {

        var winHeightAnim = $(window).height();
        altHeightAnim = winHeightAnim / 2;
        winHeightAnim = winHeightAnim - winHeightAnim / 3;

        var productos = document.getElementById('productos');
        if (productos.getBoundingClientRect().top < altHeightAnim && scrollProductos == true) {
            scrollProductos = false;
            TweenMax.to($('#productos .prod-text')[0], 0.5, { top: 0, opacity: 1, ease: Circ.easeOut });
            TweenMax.to($('#productos .prod-text')[1], 0.5, { top: 0, opacity: 1, ease: Circ.easeOut });
            TweenMax.to($('#productos .prod-text')[2], 0.5, { top: 0, opacity: 1, ease: Circ.easeOut });
        }

        var calibracion =  document.getElementById('servicios');
        if (calibracion.getBoundingClientRect().top < winHeightAnim && scrollCalibracion == true) {
            scrollCalibracion = false;
            TweenMax.to($('#servicios .section-wrapper .section-img'), 0.5, { left: 0, opacity: 1, ease: Circ.easeOut });
            TweenMax.to($('#servicios .section-wrapper .section-text'), 0.5, { right: 0, opacity: 1, ease: Circ.easeOut });
        }

        var mantenimiento = document.getElementById('mantenimiento');
        if (mantenimiento.getBoundingClientRect().top < winHeightAnim && scrollMantenimiento == true) {
            scrollMantenimiento = false;
            TweenMax.to($('#mantenimiento .section-wrapper .section-img'), 0.5, { left: 0, opacity: 1, ease: Circ.easeOut });
            TweenMax.to($('#mantenimiento .section-wrapper .section-text'), 0.5, { right: 0, opacity: 1, ease: Circ.easeOut });
        }

        var personal = document.getElementById('personal');
        if (personal.getBoundingClientRect().top < winHeightAnim && scrollPersonal == true) {
            scrollPersonal = false;
            TweenMax.to($('#personal .section-wrapper .section-img'), 0.6, { left: 0, opacity: 1, ease: Circ.easeOut });
            TweenMax.to($('#personal .section-wrapper .section-text'), 0.6, { right: 0, opacity: 1, ease: Circ.easeOut });
        }

        var ubicacion = document.getElementById('ubicacion');
        if (ubicacion.getBoundingClientRect().top < altHeightAnim && scrollUbicacion == true) {
            scrollUbicacion = false;
            TweenMax.to($('#ubicacion .section-wrapper .address'), 0.5, { top: 0, opacity: 1, ease: Circ.easeOut });
        }


        /* Navbar shadow */
        var scrollPos = $(window).scrollTop();

        if (scrollPos > 0) {
            $('.navbar-custom').addClass("navbar-shadow");

            // Show button "to top"
            if (scrollPos > 400) {
                $('.to-top').css("opacity", "1");
            } else {
                $('.to-top').css("opacity", "0");
            }

        } else if (scrollPos === 0) {
            $('.navbar-custom').removeClass("navbar-shadow");
            // hide button "to top" by default
            $('.to-top').css("opacity", "0");
        }

        /* Resize fix */
        checkWindowSize()
    });


    /* Open menu */
    $('#menu-button').click(function(){
        var heightEl = $('.options').css('height');

        if (heightEl === '0px') {
            $('.navbar-custom').css('maxHeight', '26.25rem');
            $('.options').css('maxHeight', '21.875rem');
        } else {
            $('.navbar-custom').css('maxHeight', '4.375rem');
            $('.options').css('maxHeight', '0');
        }
    });

});

/* Google Maps */
function initMap() {
    var location = {
        lat: -0.088524,
        lng: -78.476025
    };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: location,
        // gestureHandling: 'greedy'
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: "CALI&TRON"
    });

    infowindow.open(map, marker);

}

/* Responsive Navbar */
function checkWindowSize() {
    var windowsize = $(window).width();

    if (windowsize > 767) {
        $('.navbar-custom').css('maxHeight', '26.25rem');
        $('.options').css('maxHeight', '4.375rem');
        $('.navbar-custom').css('transition', '');
        $('.options').css('transition', '');

    } else {
        $('.navbar-custom').css('maxHeight', '4.375rem');
        $('.options').css('maxHeight', '0');

        setTimeout(function () {
            $('.navbar-custom').css('transition', 'max-height 0.3s ease-in-out');
            $('.options').css('transition', 'max-height 0.3s ease-in-out');
        }, 500);
    }
}

/* Parallax function */
function parallaxScrollElement(element) {
    var hV = window.innerHeight;
    var hE = element.clientHeight;
    var hB = 100;
    var yV = window.pageYOffset; //Relative to document.
    var yE = element.getBoundingClientRect().top; //Relative to view-port.
    var yB = ((yE) / (hV)) * (hE - hB); //Relative to element.
    element.style.backgroundPositionY = yB + "px";
}

