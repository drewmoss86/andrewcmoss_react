import $ from 'jquery'; 

$(function() {
	setTimeout(function(e) {
		$('.fly-in-text').removeClass('hidden');
	})
	$('.after-fly-in-text').show();
});