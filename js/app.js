$(document).ready(function () {

    setTimeout(function () {
        $('.carousel-caption h2:eq(0)').css('opacity', '1');
    }, 1000);


    /* Variables for Scroll animations */
    var scrollProductos = true,
        scrollMision = true,
        scrollVision = true,
        scrollCalibracion = true,
        scrollMantenimiento = true,
        scrollPersonal = true,
        scrollUbicacion = true;

    checkWindowSize();

    /* Fade In Effect in Carousel Text */
    $('#carouselCalitron').on('slide.bs.carousel', function (event) {
        var currrentSlideIndex = event.to;
        var previousSlideIndex = event.from;

        var array = $('.carousel-caption h2');

        var currentSlide = $('.carousel-caption h2')[currrentSlideIndex];
        var previousSlide = $('.carousel-caption h2')[previousSlideIndex];

        $(previousSlide).css('opacity', '0');
        setTimeout(function () {
            $(currentSlide).css('opacity', '1');
        }, 1000);
    })

    /* Animation for Menu */
    // $('.navbar-link').click(function (event) {
    //     event.preventDefault();
    //     $('html,body').animate({
    //         scrollTop: $(this.hash).offset().top
    //     }, 1000);
    // });

    /* Parallax effect */
    $(window).on("scroll", function () {
        var productos = document.getElementById('productos');
        var nosotros = document.getElementById('nosotros');
        var contacto = document.getElementById('contacto-parallax');
        var servicios = document.getElementById('servicios');

        parallaxScrollElement(productos);
        parallaxScrollElement(nosotros);
        parallaxScrollElement(contacto);
        parallaxScrollElement(servicios);
    })

    /* Scroll Animations */
    $(window).on("resize scroll", function () {

        var mision = document.getElementById('mision');
        if (mision.getBoundingClientRect().top < 530 && scrollMision == true) {
            scrollMision = false;
            $('#mision + p').addClass('slide-up');
        }

        var vision = document.getElementById('vision');
        if (vision.getBoundingClientRect().top < 530 && scrollVision == true) {
            scrollVision = false;
            $('#vision + p').addClass('slide-up');
        }

        var productos = document.getElementById('productos');
        if (productos.getBoundingClientRect().top < -70 && scrollProductos == true) {
            scrollProductos = false;
            $('.productos .prod-text').addClass('slide-up');
        }

        var calibracion =  document.getElementById('calibracion');
        if (calibracion.getBoundingClientRect().top < 360 && scrollCalibracion == true) {
            scrollCalibracion = false;
            $('#calibracion .section-wrapper .section-img').addClass('close-anim');
            $('#calibracion .section-wrapper .section-text').addClass('close-anim');
        }

        var mantenimiento = document.getElementById('mantenimiento');
        if (mantenimiento.getBoundingClientRect().top < 360 && scrollMantenimiento == true) {
            scrollMantenimiento = false;
            $('#mantenimiento .section-wrapper .section-img').addClass('close-anim');
            $('#mantenimiento .section-wrapper .section-text').addClass('close-anim');
        }

        var personal = document.getElementById('personal');
        if (personal.getBoundingClientRect().top < 360 && scrollPersonal == true) {
            scrollPersonal = false;
            $('#personal .section-wrapper .section-img').addClass('close-anim');
            $('#personal .section-wrapper .section-text').addClass('close-anim');
        }

        var ubicacion = document.getElementById('ubicacion');
        if (ubicacion.getBoundingClientRect().top < 360 && scrollUbicacion == true) {
            scrollUbicacion = false;
            $('#ubicacion .section-wrapper .address').addClass('slide-up');
        }


        /* Navbar shadow */
        var scrollPos = $(window).scrollTop();

        if (scrollPos > 0) {
            $('.navbar-calitron').addClass("navbar-shadow");

            // Show button "to top"
            if (scrollPos > 400) {
                $('.to-top').css("opacity", "1");
            } else {
                $('.to-top').css("opacity", "0");
            }

        } else if (scrollPos === 0) {
            $('.navbar-calitron').removeClass("navbar-shadow");
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
            $('.navbar-calitron').css('maxHeight', '26.25rem');
            $('.options').css('maxHeight', '21.875rem');
        } else {
            $('.navbar-calitron').css('maxHeight', '4.375rem');
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
        content: "CALI & TRON"
    });

    infowindow.open(map, marker);
}

/* Responsive Navbar */
function checkWindowSize() {
    var windowsize = $(window).width();

    if (windowsize > 767) {
        $('.navbar-calitron').css('maxHeight', '26.25rem');
        $('.options').css('maxHeight', '4.375rem');
        $('.navbar-calitron').css('transition', '');
        $('.options').css('transition', '');

    } else {
        $('.navbar-calitron').css('maxHeight', '4.375rem');
        $('.options').css('maxHeight', '0');

        setTimeout(function () {
            $('.navbar-calitron').css('transition', 'max-height 0.3s ease-in-out');
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

