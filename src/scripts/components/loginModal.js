const loginModal = () => {
    const form = document.getElementById('customer_login');
    const submitBtn = document.getElementById('login_submit_btn');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        fetch('/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: form
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
}

export { loginModal }
