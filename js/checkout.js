// Exercise 6

const bottonAppear = document.querySelector('#btn')
const forms = document.querySelectorAll('.form-control')
const validator = [
{name: 'fName', expression: /^[A-z]{3,20}$/, counter: 0},
{name: 'fLastN', expression: /^[A-z]{3,15}$/, counter: 0},
{name: 'fEmail', expression: /^[^]+@[^]+\.[A-z]{2,3}$/, counter: 0},
{name: 'fPassword', expression: /^[A-z0-9]{4,8}$/, counter: 0},
{name: 'fAddress', expression: /^[A-Za-z0-9'\.\-\s\,]{3,80}$/, counter: 0},
{name: 'fPhone', expression: /^[0-9]{9}$/, counter: 0},
]

forms.forEach((form) => {
	form.addEventListener('keyup', () => {
		const idValue = form.getAttribute("id")
		const locateValidator = validator.find((e) => e.name === idValue)
		const inputIsValid = locateValidator.expression.test(form.value)
		if (inputIsValid) {
			form.classList.remove("is-invalid")
			form.classList.add("is-valid")
			locateValidator.counter = 1
			const invalidForm = validator.find((e) => e.counter === 0)
			if (!invalidForm) {
				bottonAppear.removeAttribute('disabled')
			}
		}
		else if (!inputIsValid) {
			form.classList.remove("is-valid")
			form.classList.add("is-invalid")
			locateValidator.counter = 0
			bottonAppear.setAttribute('disabled', '')
		}
	})
})
	