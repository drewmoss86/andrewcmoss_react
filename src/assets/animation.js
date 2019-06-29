import $ from 'jquery'; 

$(function() {
	setTimeout(function(e) {
		$('.fly-in-text').removeClass('hidden');
	}, 500);

	$('.fly-in-text li')
		.delay(3000)
		.queue(function(next) {
			$(this).css('padding','10px');
			next();
	});
});
