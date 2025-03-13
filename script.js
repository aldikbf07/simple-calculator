const display = document.getElementById('display');

function appendToDisplay(input) {
    // Remove the result class if any operator is clicked
    if (['+', '-', '*', '/'].includes(input)) {
        const resultSpan = display.querySelector('.hasil');
        if (resultSpan) {
            resultSpan.classList.remove('hasil');
            resultSpan.classList.add('number');
        }
    }

    const span = document.createElement('span');
    if (['+', '-', '*', '/'].includes(input)) {
        span.className = 'operator';
    } else {
        span.className = 'number';
    }
    span.textContent = input;
    display.appendChild(span);
}

function hapus() {
    display.innerHTML = ''; 
}

function hitung() {
    try {
        const result = eval(display.textContent);
        display.innerHTML = `<span class="hasil">${result}</span>`;
    } catch (error) {
        display.innerHTML = '<span class="error">error</span>';
    }
}