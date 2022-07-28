Rebilly.initialize({
    publishableKey: 'pk_sandbox_7FB1AJwXpG7qOrQukcKcBV_jBJ5622bGmTlknWH'
});

const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        const form = document.querySelector('form');
        const paymentToken = await Rebilly.createToken(form, {
            method: 'bitcoin',
        });
        console.log({paymentToken});
    } catch(error) {
        console.error(error);
    }
});