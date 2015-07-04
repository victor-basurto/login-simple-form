$(document).on('ready', function() {

	// obtaining data from the input fields
	var $email = $('#inputEmail3');
		$pass = $('#inputPassword3');
	
	/**
	 * Datbase: login-sys
	 * Collection: user
	 */
	$('#log-in').on('click', function(e) {
		e.preventDefault();
		console.log('boton clicked');

		// object to be pass
		var user = {
			name: $email.val(),
			pass: $pass.val()
		}
		// Method: Post
		$.ajax({
			headers: {
				Accept: 'application/x-www-form-urlencoded',
				contentType: 'application/json'
			},
			method: 'POST',
			url: 'http://localhost:8080/login-sys/user',
			contentType: 'application/x-www-form-urlencoded',
			data: user,
			success: function( response ) {
				console.log('Response: ', response);
			},
			error: function() {
				console.log(arguments);
			}
		});
	});
	// $('button').click(function(e) {
	// 	var $h4 = $('h4');
	// 	e.preventDefault();
	// 	$.ajax({
	// 		type: 'GET',
	// 		url: 'http://localhost:8080/login-sys/user',
	// 		success: function( data ) {
	// 			// $h4.append('<h4>' + players.name)
	// 			console.log(data);
	// 		}
	// 	});
	// });
	// process the information

	// handle server response
});