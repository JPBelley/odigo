import './sass/style.scss';


const init = () => {

	
	const validateEmail = (form) => {

		const isLegit = (email) => {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		}

		const emailSubmitButton = form.querySelector('button');
	
		if (emailSubmitButton) {
			emailSubmitButton.addEventListener('click', (e) => {
				e.preventDefault(e);
				const emailInput = form.querySelector('input');
				const formError = form.querySelector('.form-error');
				if (formError) formError.remove();
				const email = emailInput.value;
				const isEmailLegit = isLegit(email);
				const error = document.createElement("div");
				const text = document.createTextNode('Entrer un courriel valide');
				error.appendChild(text);
				error.classList.add('form-error');

				isEmailLegit ? 
					form.submit() : // Surement un query ajax
					form.appendChild(error); 

				// isLegit ? 
			});
		}
	}

	const formEmail = document.getElementById('formEmail');
	validateEmail(formEmail);
}

init();