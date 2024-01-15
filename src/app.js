/* istanbul ignore file */
try {
    const { isValid } = require('./services/validations');

    const body = document.getElementById('body');

    const gamerTagInput = document.getElementById('gamerTagInput');
    const checkButton = document.getElementById('gamerTagCheckButton');
    const resetButton = document.getElementById('resetButton');
    const feedbackMessage = document.getElementById('gamerTagFeedback');

    const defaultBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(9, 9, 121, 1) 35%,
                rgba(0, 212, 255, 1) 100%
            ) !important`;

    const greenBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(11, 255, 168, 1) 35%,
                rgba(0, 212, 0, 1) 100%
            ) !important`;

    const redBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(200, 9, 70, 1) 35%,
                rgba(255, 0, 0, 1) 100%
            ) !important`;

    let gamerTagValue;

    gamerTagInput.addEventListener('change', (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener('click', () => {
        // TODO : Define the correct error message regarding the validation rules

        if (isValid(gamerTagValue) === undefined || gamerTagValue === '') {
            feedbackMessage.textContent = 'your gamertag is empty';
        }else{
            if (!isValid(gamerTagValue)) {
                feedbackMessage.textContent = 'your gamertag is too short';
            }else{
                feedbackMessage.textContent = 'your gamertag is valid';
            }
        }
        
        // ----------------------------------------------------------------------
        body.setAttribute(
            'style',
            isValid(gamerTagValue) ? greenBackgroundColor : redBackgroundColor
        );
    });

    resetButton.addEventListener('click', () => {
        feedbackMessage.textContent = '';
        body.setAttribute('style', defaultBackgroundColor);
    });
} catch (err) {
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(err));
}
