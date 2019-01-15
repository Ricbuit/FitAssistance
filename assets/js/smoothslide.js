


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
    y.style.display = "none";
		y.style.border
  } else {
    y.style.display = "block";
		y.style.borderBottom = "4px solid #010101";
  }
}

$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});

/*$(window).scroll(function(){
		// This is then function used to detect if the element is scrolled into view
		function elementScrolled(elem)
		{
				var docViewTop = $(window).scrollTop();
				var docViewBottom = docViewTop + $(window).height();
				var elemTop = $(elem).offset().top;
				return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
		}

		// This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
		if(elementScrolled("#one")) {
			$('#one .inner').animate({marginLeft: "16%"},2000,);
			console.log("yes");
		}
});*/
