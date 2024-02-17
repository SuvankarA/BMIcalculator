const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const params = document.querySelector('#params');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid Height'
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please give a valid Weight'
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`
        if (bmi < 18.6) {
            params.innerHTML = 'You are Underweight!'
            params.style.color = 'red'
        }else if(bmi > 24.9){
            params.innerHTML = 'You are Overweight!'
            params.style.color = 'red'
        }else{
            params.innerHTML = 'Your BMI is normal!'
            params.style.color = 'green'
        }
    }
});