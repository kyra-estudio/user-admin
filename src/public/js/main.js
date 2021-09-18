async function signIn() {
	const email = document.getElementById('email').value;
	const password1 = document.getElementById('password1').value;
	const password2 = document.getElementById('password2').value;

	//Validation
	if (
		email.length === 0 ||
		password1.length === 0 ||
		password2.length === 0
	) {
		alert('Fields empty');
		return;
	} else if (password1 !== password2) {
		alert('Password are not equal');
		return;
	}

	// Send data
	const body = JSON.stringify({
		email,
		password: password2,
	});
	const result = await fetch(
		'http://localhost:4500/api/user/sign-up',
		{
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body,
		}
	);
    
	const data = await result.json();
    if (data.message) {
        alert(data.message)
    }else{
        console.log({ data });
    }	
}

function toDetail(id) {
	// console.log({ id });
	const element = document.getElementById(id);
	console.log({ value: element.value });
	window.location.href = `/pages/book-details/${element.value}`;
}

function like() {
	console.log('like');
}
