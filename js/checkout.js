// Exercise 6

const bottonAppear = document.querySelector('#btn')
const forms = document.querySelectorAll('.form-control')
const validator = [
{name: 'fName', expression: /^[A-z]{3,20}$/, isCorrect: false},
{name: 'fLastN', expression: /^[A-z]{3,15}$/, isCorrect: false},
{name: 'fEmail', expression: /^[^]+@[^]+\.[A-z]{2,3}$/, isCorrect: false},
{name: 'fPassword', expression: /^[A-z0-9]{4,8}$/, isCorrect: false},
{name: 'fAddress', expression: /^[A-Za-z0-9'\.\-\s\,]{3,80}$/, isCorrect: false},
{name: 'fPhone', expression: /^[0-9]{9}$/, isCorrect: false},
]

forms.forEach((form) => {
	form.addEventListener('keyup', () => {
		const idValue = form.getAttribute("id")
		const locateValidator = validator.find((e) => e.name === idValue)
		const inputIsValid = locateValidator.expression.test(form.value)
		if (inputIsValid) {
			form.classList.remove("is-invalid")
			form.classList.add("is-valid")
			locateValidator.isCorrect = true
			const invalidForm = validator.find((e) => e.isCorrect === false)
			if (!invalidForm) {
				bottonAppear.removeAttribute('disabled')
			}
		}
		if (!inputIsValid) {
			form.classList.remove("is-valid")
			form.classList.add("is-invalid")
			locateValidator.isCorrect = false
			bottonAppear.setAttribute('disabled', '')
		}
	})
})
	