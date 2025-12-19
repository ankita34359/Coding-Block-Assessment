const pass = document.getElementById('pass');
const bar = document.getElementById('bar');
const text = document.getElementById('text');

        pass.addEventListener('input', () => {
            const length = pass.value.length;
            
            if (length === 0) {
                bar.style.width = '0%';
                text.textContent = '';
            } 
            else if (length < 4) {
                bar.style.width = '30%';
                bar.style.backgroundColor = 'red';
                text.textContent = 'Weak';
                text.style.color = 'black';
            } 
            else if (length >= 4 && length < 8) {
                bar.style.width = '60%';
                bar.style.backgroundColor = 'orange';
                text.textContent = 'Medium';
                text.style.color = 'black';
            } 
            else {
                bar.style.width = '100%';
                bar.style.backgroundColor = 'green';
                text.textContent = 'Strong';
                text.style.color = 'black';
            }
        });