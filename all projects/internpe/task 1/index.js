let screen = document.getElementById('screen');
        let buttons = document.querySelectorAll('button');
        let screenValue = '';
        let keyDownHandled = false;

        const operators = ['+', '-', '*', '/', '%'];

        function handleInput(buttonText) {
            if (buttonText === 'x') {
                buttonText = '*';
            }

            if (buttonText === 'AC') {
                screenValue = '';
            } else if (buttonText === 'Back') {
                screenValue = screenValue.slice(0, -1);
            } else if (buttonText === '+/-') {
                if (screenValue) {
                    if (screenValue.charAt(0) === '-') {
                        screenValue = screenValue.slice(1);
                    } else {
                        screenValue = '-' + screenValue;
                    }
                }
            } else if (buttonText === '=') {
                if (operators.includes(screenValue.slice(-1))) {
                    screenValue = 'Error';
                } else {
                    try {
                        screenValue = eval(screenValue).toString();
                    } catch {
                        screenValue = 'Error';
                    }
                }
            } else if (operators.includes(buttonText)) {
                if (screenValue === '' || operators.includes(screenValue.slice(-1))) {
                    screenValue = screenValue.slice(0, -1) + buttonText;
                } else {
                    screenValue += buttonText;
                }
            } else {
                screenValue += buttonText;
            }

            screen.value = screenValue;
        }

        for (let item of buttons) {
            item.addEventListener('click', (e) => {
                handleInput(e.target.innerText);
            });
        }

        document.addEventListener('keydown', (e) => {
            if (keyDownHandled) return;
            keyDownHandled = true;

            if (e.key === 'Enter') {
                handleInput('=');
            } else if (e.key === 'Backspace') {
                handleInput('Back');
            } else if (e.key === 'Delete') {
                handleInput('AC');
            } else if ('0123456789'.includes(e.key)) {
                handleInput(e.key);
            } else if (['+', '-', '*', '/', '%', '.'].includes(e.key)) {
                handleInput(e.key);
            } else if (e.key === 'x' || e.key === 'X') {
                handleInput('*');
            } else if (e.key === 'n') {
                handleInput('+/-');
            }

            setTimeout(() => {
                keyDownHandled = false;
            }, 10); // Adjust the timeout as necessary
        });