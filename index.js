import './sass/style.scss';


const init = () => {

	const isLegit = (email) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const validateEmail = (form) => {
		
		const emailSubmitButton = form.querySelector('button');
	
		if (emailSubmitButton) {
			emailSubmitButton.addEventListener('click', (e) => {
				e.preventDefault(e);
				const emailInput = form.querySelector('input');
				const email = emailInput.value;
				const formError = form.querySelector('.form-error');
				formError.classList.remove('show'); 

				const isEmailLegit = isLegit(email);

				isEmailLegit ? 
					form.submit() : // Surement une query ajax
					formError.classList.add('show'); 
			});
		}
	}

	const formEmail = document.getElementById('formEmail');
	if (formEmail) validateEmail(formEmail);
}

init();