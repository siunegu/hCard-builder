$(function() {

	function toTitleCase(str){
		return str.charAt(0).toUpperCase() + str.substr(1);
	}

	$('#submit-card').on('click', function(){
		var name = function(){
			var firstName = $('input[name="js-form-given-name"]').val();
			var lastName = $('input[name="js-form-surname"]').val();

			var name = toTitleCase(firstName) + " " + toTitleCase(lastName);
			
			return name
		}

		var email =	function(){
			var email = $('input[name="js-form-email"]').val();
			return email;
		}

		var phone = function(){
			var phone = $('input[name="js-form-phone"]').val();
			return phone;
		}

		var address = function(){
			var houseNumber = $('input[name="js-form-house-number"]').val() + " ";
			var street = $('input[name="js-form-street-number"]').val();
			var address = houseNumber + street;
			return address;
		}
		
		var suburb = function(){
			
				if ( $('input[name="js-form-suburb"]').val() ){
					var suburb = $('input[name="js-form-suburb"]').val() + ", ";
				}	else {
					var suburb = $('input[name="js-form-suburb"]').val();
				}
			
			return suburb;
		}

		var state = function(){
			var state = $('input[name="js-form-state"]').val().toUpperCase();
			return state;
		}
					
		var postcode = function(){
			var postcode = $('input[name="js-form-postcode"]').val();
			return postcode;
		}
			
		var country = function(){
			var country = $('input[name="js-form-country"]').val();
			return country;
		}		

		$('h3#js-card-fullname').fadeIn().html(name);
		$('span#js-card-email-firstname').html(email);
		$('span#js-card-phone').html(phone);
		$('span#js-card-address').html(address);
		$('span#js-card-address-suburb').html(suburb);
		$('span#js-card-address-state').html(state);
		$('span#js-card-postcode').html(postcode);
		$('span#js-card-country').html(country);
	})	
});