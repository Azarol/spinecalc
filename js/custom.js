/*global $, Modernizr, jQuery*/

$(function() {

	"use strict";

	Modernizr.addTest("macosx", function () {
		var strIndex = navigator.userAgent.toLowerCase().indexOf("mac");
		return (strIndex > -1);
	});

	// PRELOAD DARK BG + MODAL CLOSE
	$.imgpreload(['img/dark_wall.png', 'theme/images/modalClose.png']);

	// GENERIC JQUERY UI SETUP
	$("button, :button, :submit").button();
	$("#radiog1").buttonset();
	$("#radiog2").buttonset();
	$("#colourMode").toggleSwitch({
		highlight: true,
		width: 25,
		change: function() {
			$("body").removeClass().addClass($("#colourMode").val().toLowerCase());
		}
	});
	/*$(".demo select").each(function(i,item) {
		$(item).toggleSwitch({
			highlight: $(item).data("highlight"),
			width: 25
		});
	});*/

});