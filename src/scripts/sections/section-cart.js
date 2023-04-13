// counter

const counterIncreaseBtn = document.querySelector('[counter-btn-top]');
const counterDecreaseBtn = document.querySelector('[counter-btn-bottom]');
const counterInput = document.getElementById('counterInput');

const counter = () => {
    counterIncreaseBtn.addEventListener('click', () => {
        if(counterInput.value < 10){
            counterInput.value = +counterInput.value + 1;
        }
        
    });

    counterDecreaseBtn.addEventListener('click', () => {
        if(counterInput.value > 0){
            counterInput.value = +counterInput.value - 1;
        }
    })
}

counter()