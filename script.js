function getFormvalue(e) {
	e.preventDefault();
	const firstname = document.querySelector('input[name="fname"]').value.trim();
	const lastname = document.querySelector('input[name="lname"]').value.trim();

	alert(`${firstname} ${lastname}`);
    //Write your code here

}
