const showHidePassword = () => {
    const containers = document.querySelectorAll('[data-show-hide-password-container]');

    if (containers.length > 0) {
        for (const container of containers) {
            const passwordInput = container.querySelector('[data-show-hide-password-input="password"]');
            const showPasswordBtn = container.querySelector('[data-show-hide-password-button="show_password"]');
            const hidePasswordBtn = container.querySelector('[data-show-hide-password-button="hide_password"]');

            showPasswordBtn.addEventListener('click', () => {
                passwordInput.setAttribute('type', 'password');
                showPasswordBtn.classList.add('dn');
                hidePasswordBtn.classList.remove('dn');
            });
        
            hidePasswordBtn.addEventListener('click', () => {
                passwordInput.setAttribute('type', 'text');
                showPasswordBtn.classList.remove('dn');
                hidePasswordBtn.classList.add('dn');
            });
        }
    }
}

export { showHidePassword }
