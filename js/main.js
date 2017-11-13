import status from './test';

(() => {
    console.log(`Test:${status()}`);
})();

$(document).ready(function() {

	function setHeight() {
		let windowHeight = $(window).innerHeight();
		$('#app').css('min-height', windowHeight);
	};

	setHeight();

	$(window).resize(function() {
		setHeight();
	});


	$(document).on("mousemove",function(e) {
		let card = $("#app");
		let ax = -($(window).innerWidth()/2- e.pageX) / 20;
		let ay = ($(window).innerHeight()/2- e.pageY) / 10;

		card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
	});
});
