
// Exercise 6

	// Get the input fields
	const F_NAME = document.getElementById("fName");
	const F_EMAIL = document.getElementById("fEmail");
	const F_ADDRESS = document.getElementById("fAddress");
	const F_LAST_NAME = document.getElementById("fLastN");
	const F_PASSWORD = document.getElementById("fPassword");
	const F_PHONE = document.getElementById("fPhone");



function validate() {
	// Validate fields entered the user with regex: name, lastname, email, phone, password and address.
	if(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,}[\s]*)+$/.test(F_NAME.value)){
		F_NAME.classList.remove("is-invalid")
		F_NAME.classList.add("is-valid");
	} else {
        F_NAME.classList.add("is-invalid");
		
	};
	
	if(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,}[\s]*)+$/.test(F_LAST_NAME.value)){
		F_LAST_NAME.classList.remove("is-invalid")
		F_LAST_NAME.classList.add("is-valid");
	} else {
        F_LAST_NAME.classList.add("is-invalid");
	};
	if(/^[\w]+@{1}[\w]+\.[a-z]{2,3}$/.test(F_EMAIL.value)){
		F_EMAIL.classList.remove("is-invalid")
		F_EMAIL.classList.add("is-valid");
	} else {
        F_EMAIL.classList.add("is-invalid");
	};

	if(/^\d{9}$/.test(F_PHONE.value)){
		F_PHONE.classList.remove("is-invalid");
		F_PHONE.classList.add("is-valid");
	} else {
        F_PHONE.classList.add("is-invalid");
	};
	if( /^[0-9a-zA-Z]+$/.test(F_PASSWORD.value)){
		F_PASSWORD.classList.remove("is-valid");
		F_PASSWORD.classList.add("is-valid")
	} else {
        F_PASSWORD.classList.add("is-invalid");
	};
	if(F_ADDRESS.value.length > 3 ){
		F_ADDRESS.classList.remove("is-invalid");
		F_ADDRESS.classList.add("is-valid")
	} else {
		F_ADDRESS.classList.add("is-invalid");
	};
	
};
