$(document).ready(function(){
	$(".dropdown-button").dropdown();
});

$(document).ready(function(){
	$('.carousel').carousel();
    dist:-100;
    padding:200;
    // $('.carousel').carousel({full_width: true});
    // $('.carousel.carousel-slider').carousel();
});

//	Inicialización del parallax
$(document).ready(function()
{
	$('.parallax').parallax();
});

$(".button-collapse").sideNav();


//	Activa los modals
$(document).ready(function()
{
    $('.modal').modal();
});

//	El carousel se mueve por sí solo cada 5 segundos.
function autoplay() 
{
	$('.carousel').carousel('next');
	setTimeout(autoplay, 6000);
}
autoplay();

 $(document).ready(function(){
    $('.collapsible').collapsible();
  });

