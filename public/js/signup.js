const signupHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#first_name').value.trim();
    const lastName = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (firstName && lastName && email && password) {
        const response = fetch(`/api/user`, {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/homepage')
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupHandler);