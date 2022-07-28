Rebilly.initialize({
    publishableKey: 'pk_sandbox_7FB1AJwXpG7qOrQukcKcBV_jBJ5622bGmTlknWH'
});


Rebilly.on('ready', function () {
    const card = Rebilly.card.mount('#mounting-point');
});


const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', async (e) => {
    console.log('Generating token...');
    e.preventDefault();

    try {
        const form = document.querySelector('form');
        const paymentToken = await Rebilly.createToken(form);
        console.log({paymentToken});
    } catch(error) {
        console.error(error);
    }
});