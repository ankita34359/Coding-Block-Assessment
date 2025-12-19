const one = document.getElementById('name');
const two = document.getElementById('role');
const three = document.getElementById('description');
const four = document.getElementById('password');
const five = document.getElementById('name1');
const six = document.getElementById('role1');
const seven = document.getElementById('description1');
const eight = document.getElementById('password1');
const nine = document.getElementById('button');

one.addEventListener('input', update);
two.addEventListener('input', update);
three.addEventListener('input', update);
four.addEventListener('input', update);

nine.addEventListener('click', () => {
    one.value = '';
    two.value = '';
    three.value = '';
    four.value = '';
    update();
});

function update() {
    five.textContent = one.value || 'Your Name';
    six.textContent = two.value || 'Your Role';
    seven.textContent = three.value || 'Your Description';
    eight.textContent = four.value || 'Your Password';
}
