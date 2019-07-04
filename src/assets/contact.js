import $ from 'jquery';

$(document).ready(function() {
	$('#phone').keyup(function() {
		this.value = this.value.replace(/(\d{3})\-?(\d{3})\-?(\d{4})/g,'$1-$2-$3');
	});
});