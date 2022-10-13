// Exercise 6
// function validate() {
// 	var error = 0;
// 	const forms = document.querySelectorAll('.form-control')
// 	const validator = [
// 	{name: 'fName', expression: /^[A-z]{3,20}$/},
// 	{name: 'lName', expression: /^[A-z]{3,15}$/},
// 	{name: 'fEmail', expression: /^[^]+@[^]+\.[A-z]{2,3}$/},
// 	{name: 'fPassword', expression: /^[A-z0-9]{4,8}$/},
// 	{name: 'fAddress', expression: /^[A-z0-9]{3,80}$/},
// 	{name: 'fPhone', expression: /^[0-9]{9}$/},
// 	]

// 	forms.forEach((form) => {
// 		form.addEventListener('keydown', () => {
// 			const idValue = form.getAttribute("id")
// 			const locateValidator = validator.find((e) => e.name === idValue)
// 			const inputIsValid = locateValidator.expression.test(form.value)
// 			if (inputIsValid) {
// 				form.classList.add("is-valid")
// 			}
// 			else if (!inputIsValid) {
// 				form.classList.add("is-invalid")
// 			}
// 		})
// 	})
// 	if (error > 0) {
// 	} else {
// 		alert("OK");
// 	}

// }

var error = 0;
const forms = document.querySelectorAll('.form-control')
const validator = [
{name: 'fName', expression: /^[A-z]{3,20}$/},
{name: 'lName', expression: /^[A-z]{3,15}$/},
{name: 'fEmail', expression: /^[^]+@[^]+\.[A-z]{2,3}$/},
{name: 'fPassword', expression: /^[A-z0-9]{4,8}$/},
{name: 'fAddress', expression: /^[A-z0-9]{3,80}$/},
{name: 'fPhone', expression: /^[0-9]{9}$/},
]

forms.forEach((form) => {
	form.addEventListener('keydown', () => {
		const idValue = form.getAttribute("id")
		const locateValidator = validator.find((e) => e.name === idValue)
		const inputIsValid = locateValidator.expression.test(form.value)
		if (inputIsValid) {
			form.classList.remove("is-invalid")
			form.classList.add("is-valid")
		}
		else if (!inputIsValid) {
			form.classList.remove("is-valid")
			form.classList.add("is-invalid")
		}
	})
})

// (() => {
// 	'use strict'

// 	/* Fetch all the forms we want to apply custom Bootstrap validation styles to */
// 	const forms = document.querySelectorAll('.needs-validation')
// 	/* Loop over them and prevent submission */
// 	Array.from(forms).forEach(form => {
// 		form.addEventListener('submit', event => {
// 			console.log(forms);
// 			if (!form.checkValidity()) {
// 				event.preventDefault()
// 				event.stopPropagation()
// 			}

// 			form.classList.add('was-validated')
// 		}, false)
// 	})
// })()

// form.classList.add(is-valid, is-invalid)
// Get the error elements
// var errorName = document.getElementById("errorName");
// var errorEmail = document.getElementById("errorEmail");
// Validate fields entered by the user: name, phone, password, and email

// Get the input fields
// var fName = document.getElementById("fName");
// var fEmail = document.getElementById("fEmail");

	// if (fName.value == "" || burro) {
	// 	error++;
	// 	if (fEmail.value == "") {
	// 		error++;
	// 	}
	