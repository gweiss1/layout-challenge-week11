/**
 * All JavaScript goes here
 * 
 */

console.log('Main');

$('.close-modal').click(function() {
	$('.modal-outer').css('display', 'none');
});

$('.order-btn').click(function() {
	$('.modal-outer').css('display', 'block');
});