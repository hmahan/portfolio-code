// JavaScript Document

	
$(document).ready(function() {
	
	//Start page effect
	$('#page_effect').fadeIn(2000);
	
	//Start show all button
	$('#showAll').click(function() {
		$('.item').removeClass('fade');
	});
	
	//start Journalism button
	$('#opt1').click(function() { 
		$('.item').removeClass('fade');
		$('.type-2').addClass('fade');
		$('.type-3').addClass('fade');
	});
	
	// Start Design & UX button
	$('#opt2').click(function() {
		$('.item').removeClass('fade');
		$('.type-1').addClass('fade');
		$('.type-3').addClass('fade');
	});
	
	//Start programming button
	$('#opt3').click(function() {
		$('.item').removeClass('fade');
		$('.type-1').addClass('fade');
		$('.type-2').addClass('fade');
	});
	

});
