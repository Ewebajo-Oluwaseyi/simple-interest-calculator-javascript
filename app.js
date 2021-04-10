const total = document.getElementById('total')
const amount = document.getElementById('amount');
const rate = document.getElementById('rate');
const years = document.getElementById('years');
const simpleInterest = document.getElementById('simple-interest');
const principalvalue = document.getElementById('principalvalue')
const rateValue = document.getElementById('rateValue')
const yearValue = document.getElementById('yearValue')
const totalResult = document.getElementById('total-result')
const principalResult = document.getElementById('principal-result');
const rateResult = document.getElementById('rate-result');
const yearsResult = document.getElementById('years-result')
const loading = document.getElementById('loading');
const results = document.getElementById('results')
const form = document.getElementById('interest-form')
const select = document.getElementById('select')
const totalForm = document.getElementById('totalForm')
const amountForm = document.getElementById('amountForm')
const rateForm = document.getElementById('rateForm')
const yearsForm= document.getElementById('yearsForm')
const submitBtn= document.getElementById('submitBtn')

if(select.selectedIndex === 0) {
    submitBtn.style.display = 'none'
}

select.addEventListener("change", function() {
    if(select.value === 'totalOption'){
        submitBtn.style.display = 'block'
        totalForm.style.display = 'none'
        amountForm.style.display = 'block'
        rateForm.style.display = 'block'
        yearsForm.style.display = 'block'


    }
    if(select.value === 'principalOption'){
        submitBtn.style.display = 'block'
        totalForm.style.display = 'block'
        amountForm.style.display = 'none'
        rateForm.style.display = 'block'
        yearsForm.style.display = 'block'
    }
    if(select.value === 'rateOption'){
        submitBtn.style.display = 'block'
        totalForm.style.display = 'block'
        rateForm.style.display = 'none'
        amountForm.style.display = 'block'
        yearsForm.style.display = 'block'
    }
    if(select.value === 'timeOption'){
        submitBtn.style.display = 'block'
        totalForm.style.display = 'block'
        yearsForm.style.display = 'none'
        amountForm.style.display = 'block'
        rateForm.style.display = 'block'
    }

})


const calculateResults = (e) => {
    const parsetotal = parseFloat(total.value)
    const parsePrincipal = parseFloat(amount.value);
    const parseRate = parseFloat(rate.value)/100;
    const parseTime = parseFloat(years.value);


    // compute simple interest
    const x = (parseRate * parseTime);

    const calsimpleInterest = (parsePrincipal + parsePrincipal * x);

    // compute principal

    const y = (1 + parseRate * parseTime)

    const calPrincipal = parsetotal / y

    // compute rate

    const z = (1 / parseTime) * (parsetotal / parsePrincipal -1)

    const calRate = z * 100

    // compute time

    const calYear = (1 / parseRate) * (parsetotal / parsePrincipal -1)

    if(isFinite(calsimpleInterest)) {

        simpleInterest.value = calsimpleInterest.toFixed(2);

        results.style.display = 'block';

        if(simpleInterest.value) {
            totalResult.style.display = 'block'
            principalResult.style.display = 'none'
            rateResult.style.display = 'none'
            yearsResult.style.display = 'none'
        }

        loading.style.display = 'none';

    } else if(isFinite(calPrincipal)) {
        principalvalue.value = calPrincipal.toFixed(2)

        console.log(principalvalue.value)

        results.style.display = 'block';

        if(principalvalue.value) {
            principalResult.style.display = 'block'
            totalResult.style.display = 'none'
            rateResult.style.display = 'none'
            yearsResult.style.display = 'none'
        }

        loading.style.display = 'none';
    }

    else if(isFinite(calRate)) {
        rateValue.value = calRate.toFixed(2)
        console.log(rateValue.value)

        results.style.display = 'block';

        if(rateValue.value) {
            rateResult.style.display = 'block'
            totalResult.style.display = 'none'
            principalResult.style.display = 'none'
            yearsResult.style.display = 'none'
        }

        loading.style.display = 'none';
    }

    else if(isFinite(calYear)) {
        yearValue.value = calYear.toFixed(0)
        console.log(yearValue.value)
        results.style.display = 'block';

        if(yearValue.value) {
            yearsResult.style.display = 'block'
            totalResult.style.display = 'none'
            principalResult.style.display = 'none'
            rateResult.style.display = 'none'
        }

        loading.style.display = 'none';
    }
    else {
        showError('Please check your numbers')
    }
    total.value = ''
    amount.value = '';
    rate.value = '';
    years.value = '';
};

form.addEventListener('submit', (e) => {
    results.style.display = 'none';
    loading.style.display = 'block';

    setTimeout(calculateResults, 3000)

    e.preventDefault();

    select.selectedIndex = 0
})

const showError = (error) => {
    results.style.display = 'none';
    loading.style.display = 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card')

    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000)
}

const clearError = () => {
    document.querySelector('.alert').remove()
}