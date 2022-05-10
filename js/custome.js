///navbar on scroll
$(window).on('scroll',()=>{
    let scrollIndex = $(this).scrollTop();
    if( scrollIndex > 50 ){
        $(".navbar-cs").addClass('navbar-cs-active')
    }else {
        $(".navbar-cs").removeClass('navbar-cs-active')
    }
})








///navbar click on link
$(".nav-link").on('click',()=>{
    $(".navbar-collapse").collapse('hide')
})




///navbar click on link
$(".buttons a,.footer a,.nav-link").on('click',function (event){
    if(this.hash !== ""){
        event.preventDefault();

        var hash = this.hash;

        $("html,body").animate({
            scrollTop: $(hash).offset().top-50,
        },900)


    }
})






/////go to top btn
$(window).on('scroll',function (){
    let pos = $(this).scrollTop();

    if (pos >= 400){
        $(".goToTop").addClass('goToTop-active');
    }else {
        $(".goToTop").removeClass('goToTop-active');
    }
})


$(".goToTop").on('click',function (){
    $("html , body").animate({
        scrollTop:0
    },2000)
})
