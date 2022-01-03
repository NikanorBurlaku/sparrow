$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.slider-review').slick({
		arrows:true,
		slidesToShow:2,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
function show()
{
var reservation=document.querySelector('.reservation')
reservation.style.display = (reservation.style.display == "none") ? "block" : "none";
console.log('1')
}

function open_successfully()
{
	var reservation=document.querySelector('.reservation')
	reservation.style.display = "none";
	var successfully=document.querySelector('.successfully')
	successfully.style.display = "block";
	console.log('1')
}
document.getElementById('close_reservation').onclick = function() {
	var reservation=document.querySelector('.reservation')
	reservation.style.display = "none";
	console.log('1')
}