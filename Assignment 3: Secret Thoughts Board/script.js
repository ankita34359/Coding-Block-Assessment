let box = document.getElementById('add');
box.addEventListener('click', fun());

let store = document.querySelector('container');

const content = document.getElementById('content').value;

if(content === ""){
    document.getElementById('content').textContent = "Please write something here...";
    document.getElementById('alert');
}
    const p = document.createElement("p");
    p.innerHTML = content;
    store.appendChild(p);

    content.value = "";

document.getElementById()
