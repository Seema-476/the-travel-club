function opennav() {
    document.getElementById("navlist").classList.toggle("start-0");
    document.querySelector(".menuicon").classList.toggle("cross");
    document.body.classList.toggle("overflowhidden");
}

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    // fade: true,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".btnnext",
    prevArrow: ".btnprev",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // dots: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.teamresponsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    // fade: true,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: ".btnnext",
    prevArrow: ".btnprev",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // dots: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

    AOS.init({
        duration: 1200,
    once:true
    });