// Calculate function
function calculate() {
    // Input
    const sizeRing = parseFloat(document.getElementById('sizeRing').value);
    const thickRing = parseFloat(document.getElementById('thickRing').value);
    const widthRing = parseFloat(document.getElementById('widthRing').value);
    const colorRing = document.getElementById('colorRing').value;

    // Calculate
    let sizeCoef = (function (sizeRing, thickRing) {
        if (thickRing > 1.7) {
            return ((sizeRing + thickRing) * 3.14) - 0.4;
        } else {
            return (sizeRing + thickRing) * 3.14;
        }

    })(sizeRing, thickRing);

    let widthCoef = (function (sizeCoef, widthRing) {
        if (widthRing > 6) {
            return (sizeCoef + 0.4);
        } else if (widthRing > 4) {
            return (sizeCoef + 0.2);
        } else if (widthRing < 4 && widthRing > 2) {
            return sizeCoef;
        } else {
            return (sizeCoef - 0.3);
        }
    })(sizeCoef, widthRing);

    let colorCoef = (function (widthCoef, colorRing) {
        if (colorRing === 'white') {
            return widthCoef + 0.3;
        } else if (colorRing === 'red') {
            return widthCoef;
        } else if (colorRing === 'lemon') {
            return widthCoef - 0.25;
        }
    })(widthCoef, colorRing);

    // choice color ring changed background image   
    let colorBackground = (function (colorRing) {
        let el = document.getElementById('main');;
        if (colorRing === 'white') {
            el.classList.remove('lemonBackground');
            el.classList.remove('redBackground');
            el.classList.add('whiteBackground');
        } else if (colorRing === 'red') {
            el.classList.remove('whiteBackground');
            el.classList.remove('lemonBackground');
            el.classList.add('redBackground');
        } else if (colorRing === 'lemon') {
            el.classList.remove('whiteBackground');
            el.classList.remove('redBackground');
            el.classList.add('lemonBackground');
        }
    })(colorRing);

    console.log(colorBackground);
    // Output
    document.getElementById('resultSpace').innerHTML += `${'<br></br>'}=> ${colorCoef.toFixed(2)} millimetres (${colorRing})`;
    console.log(colorCoef.toFixed(2));
};

// Function show help text under result space
function showHelpText() {
    let el = document.getElementById("example");
    el.classList.toggle('hide');
    el.classList.toggle('example');
};

// start calculate function
document.querySelector('.btn__ok').addEventListener('click', calculate);
document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        calculate();
    }
});

// start show function
document.getElementById('helpBtn').addEventListener('click', showHelpText);