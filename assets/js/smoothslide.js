


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
