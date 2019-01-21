


$(document).ready(function(){

	$("a").on('click', function(event) {

		if (this.hash !== "") {

			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({

				scrollTop: $(hash).offset().top -60
			}, 800, function(){

			});
		}
	});



});

function myFunction() {
 var x = document.getElementById("container");
 x.classList.toggle("change");
 myFunction2();
}

	function myFunction2() {
  var y = document.getElementById("myLinks");
  if (y.style.display === "block") {
    //y.style.display = "none";
		    $("#myLinks").slideToggle("fast");
  } else {
    //y.style.display = "block";
		y.style.borderBottom = "4px solid #010101";
$("#myLinks").slideToggle("fast");
  }
}

$(document).ready(function(){
	if ($(window).width() > 980)
	$('#banner .inner h1').animate({paddingLeft: "0"},2500,);
});

$(window).scroll(function(){
		// This is then function used to detect if the element is scrolled into view
		function elementScrolled(elem)
		{
				var docViewTop = $(window).scrollTop();
				var docViewBottom = docViewTop + $(window).height();
				var elemTop = $(elem).offset().top;
				return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
		}

		// This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
		if(elementScrolled("#one .inner")) {
			if ($(window).width() > 1300)
				$('#one').animate({paddingTop: "6em", paddingRight: "0", paddingBottom: "4em", paddingLeft: "0"},1000,);
			}

		if(elementScrolled("#two .inner")) {
			if ($(window).width() > 1300)
			$('#two').animate({paddingTop: "6em", paddingRight: "0", paddingBottom: "4em", paddingLeft: "0"},1000,);
		}
		if(elementScrolled("#three .row")) {
			if ($(window).width() > 1300)
			$('#three .row').animate({paddingLeft: "0", paddingRight: "0"},1000,);
		}
		if(elementScrolled("#five .inner")) {
			if ($(window).width() > 1300)
			$('#five').animate({paddingTop: "6em", paddingRight: "0", paddingBottom: "4em", paddingLeft: "0"},1000,);
		}
		if(elementScrolled("#four .inner")) {
			if ($(window).width() > 1300)
			$('#four .content').animate({paddingRight: "0", paddingLeft: "0"},1000,);
		}
});
