
// Exercise 6
function validate() {
	var error = 0;
	const forms = document.querySelectorAll('.needs-validation')
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	// form.classList.add(is-valid, is-invalid)
	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value == "" || burro) {
		error++;
		if (fEmail.value == "") {
			error++;
		}

		if (error > 0) {

		} else {
			alert("OK");
			// window.addEventListener.
		}

	}
}

	(() => {
		'use strict'

		/* Fetch all the forms we want to apply custom Bootstrap validation styles to */
		const forms = document.querySelectorAll('.needs-validation')
		/* Loop over them and prevent submission */
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				console.log(forms);
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
	})()