jQuery(document).ready(function() {

	jQuery("#send").click(function(e) {
		
		e.preventDefault();
		
		var form_obj = new registration_form;	
		form_obj.validate();
		
	});
	
	class registration_form {
	
	constructor() {
		
		this.required_fields = {
			name: true,
			email: true,
			phone: false,
			address: false,
			password1: true,
			password2: true,
			message: true,
		};
		
		this.is_valid = true;
		
	}
	
	validate() {
	
		var fields = document.getElementById('register').getElementsByClassName('field');
		
		for (let i = 0; i < fields.length; i++) {
		
			let field = fields[i];
			
			var input_field = field.getElementsByTagName('input')[0];
			
			if (!this.required_fields[input_field.id]) {
				continue;				
			}
			
			var error_field = field.getElementsByClassName('error')[0];
			
			if (input_field.value.length == 0) {
				this.is_valid = false;
				error_field.style.display = 'block';
			} else {
				error_field.style.display = 'none';
			}
			
		}
		
		this.validate_password();
		
		if (this.is_valid) {
			alert('Your message was sent successfully! Thank you! ＼(^o^)／');
			document.getElementById('register').submit();
		}
		
	}
	
	validate_password() {
	
		var pass1 = document.getElementById('password1').value;
		var pass2 = document.getElementById('password2').value;
		
		if (pass1 != pass2) {
			this.is_valid = false;
			alert('Passwords do not match!');
		}
		
	}
	
}

});