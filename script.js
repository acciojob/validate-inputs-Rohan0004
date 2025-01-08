//your JS code here. If required.
function validate(e) {
	const inputElement = event.target;
	const inputValue = inputElement.value;
	const inputId = inputElement.id;

	if (inputId == 'name') {
		let regex = /[A-Za-z]{3,}/;
		changeColor(regex,inputValue,inputElement);
	} else if (inputId == 'email') {
		let regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
		changeColor(regex,inputValue,inputElement);
	} else {
		let regex = /[0-9]{10}/;
		changeColor(regex,inputValue,inputElement);
	}
}

function changeColor(regex,inputValue,inputElement) {
	if (regex.test(inputValue)) {
			inputElement.style.backgroundColor = 'lightgreen';
		} else {
			inputElement.style.backgroundColor = 'pink';
		}
}